// view list in dropdown
window.onload = function() {
    const barangSelect = document.getElementById('barang');
    const sortedBarang = barangJson.sort((a, b) => {
        return a.sku.localeCompare(b.sku, 'en', { sensitivity: 'base' });
    });

    sortedBarang.forEach(barang => {
        const option = document.createElement('option');
        option.value = barang.id;
        option.textContent = `${barang.id} - ${barang.sku}`;
        barangSelect.appendChild(option);
    });
};


// variable for all sum
let sumAllCt = 0;
let sumAllNW = 0;
let sumAllVolume = 0;

// function add item to form
document.getElementById('po-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const barangId = document.getElementById('barang').value;
    const jumlah = document.getElementById('jumlah').value;
    if (!barangId || jumlah <= 0) {
        Swal.fire({
        icon: 'warning',
        title: 'Input tidak valid!',
        text: 'Harap pilih barang dan masukkan jumlah yang valid.',
        confirmButtonText: 'OK'
      });
      return;
    }

    const barang = barangJson.find(b => b.id == barangId);
    const totalNW = barang.nw * jumlah;
    const totalVolume = barang.volume * jumlah;

    // update sum all
    sumAllCt += Number(jumlah);
    sumAllNW += totalNW;
    sumAllVolume += totalVolume;

    // view item in table
    const tableBody = document.getElementById('po-list').getElementsByTagName('tbody')[0];

    const row = document.createElement('tr');

    const rowId = document.createElement('td');
    rowId.classList.add('text-center');
    rowId.textContent = barang.id;
    row.appendChild(rowId);

    const rowSku = document.createElement('td');
    rowSku.classList.add('text-center');
    rowSku.textContent = barang.sku;
    row.appendChild(rowSku);
    
    const rowDesc = document.createElement('td');
    rowDesc.textContent = barang.desc;
    row.appendChild(rowDesc);

    const rowQty = document.createElement('td');
    rowQty.classList.add('text-center');
    rowQty.textContent = jumlah;
    row.appendChild(rowQty);

    const rowNW = document.createElement('td');
    rowNW.classList.add('text-center');
    rowNW.textContent = `${totalNW.toFixed(3)}`;
    row.appendChild(rowNW);

    const rowVolume = document.createElement('td');
    rowVolume.classList.add('text-center');
    rowVolume.textContent = `${totalVolume.toFixed(3)}`;
    row.appendChild(rowVolume);

    // add button edit and delete
    const aksiCell = document.createElement('td');
    const containerButton = document.createElement('div');
    containerButton.classList.add('text-center');

    // edit
    const editButton = document.createElement('button');
    const cls = ["edit", "btn", "btn", "btn-sm", "btn-warning"]
    editButton.classList.add(...cls);
    editButton.style.minWidth = '100px';
    editButton.textContent = 'Ubah';
    editButton.onclick = function () {
        const jumlah = Number(rowQty.innerText);

        Swal.fire({
            title: 'Edit Jumlah',
            input: 'number',
            inputLabel: 'Masukkan jumlah baru:',
            inputValue: jumlah,
            inputAttributes: {
            min: 1,
            step: 1
            },
            showCancelButton: true,
            confirmButtonText: 'Update',
            cancelButtonText: 'Batal',
            reverseButtons: true,
            didOpen: () => {
              const input = Swal.getInput();
              if (input) {
                  input.focus();
                  input.select(); 
              }
            },
            inputValidator: (value) => {
              if (!value || value <= 0) {
                  return 'Jumlah harus lebih dari 0';
              }
            }
        }).then((result) => {
            if (result.isConfirmed) {
              const newQty = Number(result.value);

              const oldQty = Number(rowQty.innerText);
              const oldNw = Number(rowNW.innerText);
              const oldVolume = Number(rowVolume.innerText);

              const newNW = barang.nw * newQty;
              const newVolume = barang.volume * newQty;

              rowQty.textContent = newQty;
              rowNW.textContent = `${newNW.toFixed(3)}`;
              rowVolume.textContent = `${newVolume.toFixed(3)}`;

              sumAllCt = sumAllCt - oldQty + newQty;
              sumAllNW = sumAllNW - oldNw + newNW;
              sumAllVolume = sumAllVolume - oldVolume + newVolume;

              document.getElementById('total-ct').value = `${sumAllCt}`;
              document.getElementById('total-nw').value = `${sumAllNW.toFixed(3)}`;
              document.getElementById('total-volume').value = `${sumAllVolume.toFixed(3)}`;
            }
        });
    };


    containerButton.appendChild(editButton);

    //delete
    const deleteButton = document.createElement('button');
    const clsDelete = ["edit", "btn", "btn", "btn-sm", "btn-danger"]
    deleteButton.classList.add(...clsDelete);
    deleteButton.style.minWidth = '100px';
    deleteButton.textContent = 'Hapus';
    deleteButton.onclick = function () {
        Swal.fire({
            title: 'Yakin ingin menghapus item ini?',
            text: 'Data akan dihapus dari daftar.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Hapus',
            cancelButtonText: 'Batal',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
              // Ambil nilai dari baris
              const qty = Number(rowQty.innerText);
              const nw = Number(rowNW.innerText);
              const volume = Number(rowVolume.innerText);

              // Update total
              sumAllCt -= qty;
              sumAllNW -= nw;
              sumAllVolume -= volume;

              document.getElementById('total-ct').value = `${sumAllCt}`;
              document.getElementById('total-nw').value = `${sumAllNW.toFixed(3)}`;
              document.getElementById('total-volume').value = `${sumAllVolume.toFixed(3)}`;

              // Hapus baris
              tableBody.removeChild(row);

              // Notifikasi sukses (opsional)
              Swal.fire({
                  icon: 'success',
                  title: 'Berhasil dihapus',
                  timer: 1000,
                  showConfirmButton: false
              });
            }
        });
    };

    containerButton.appendChild(deleteButton);

    row.appendChild(aksiCell);
    aksiCell.appendChild(containerButton);
    tableBody.appendChild(row);

    // update all sum
    document.getElementById('total-ct').value = `${sumAllCt}`;
    document.getElementById('total-nw').value = `${sumAllNW.toFixed(3)}`;
    document.getElementById('total-volume').value = `${sumAllVolume.toFixed(3)}`;

    // reset form
    document.getElementById('po-form').reset();
});

//print PDF File
document.getElementById('cetakPDF').addEventListener('click', function () {
    const sumCT = document.getElementById('total-ct').value;
    const sumNW = document.getElementById('total-nw').value;
    const sumVOL = document.getElementById('total-volume').value;

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Menambahkan judul
    doc.setFontSize(12);
    doc.text("Estimasi Sales Order", 14, 20);
    doc.text("CT: " + sumCT, 80, 20);
    doc.text("NW: " + sumNW, 120, 20);
    doc.text("Volume: " + sumVOL, 160, 20);

    // Mengambil data dari tabel HTML
    const table = document.getElementById('po-list');
    const rows = Array.from(table.querySelectorAll('tr'));

    const tableData = [];
    const headers = [];
    
    // Mengambil header tabel
    rows[0].querySelectorAll('th').forEach((th) => {
        headers.push(th.innerText);
    });

    const selectedColumnsIndex = [0, 1, 2, 3, 4, 5];

    rows.slice(1).forEach(row => {
        const cells = row.querySelectorAll('td');
        const rowData = [];
        selectedColumnsIndex.forEach(index => {
            rowData.push(cells[index].innerText);  // Menambahkan data dari kolom yang dipilih
        });
        tableData.push(rowData);
    });

    doc.autoTable({
        head: [headers.filter((_, index) => selectedColumnsIndex.includes(index))],  // Menyaring header yang ditampilkan
        body: tableData,
        startY: 30,
        styles: { fontSize: 8, cellPadding: 2 },
        headStyles: {
            fillColor: [0, 123, 255], 
            textColor: [255, 255, 255], 
            fontSize: 12,
            halign: 'center'
        },
        bodyStyles: {
            fillColor: [240, 240, 240]
        },
        columnStyles: {
            3: {
                halign: 'right',
            },
            4: {
                halign: 'right',
            },
            5: {
                halign: 'right',
            },
        }
    });

    doc.save("my-estimate-sales-order.pdf");
})

//print All Item
document.getElementById('catalog').addEventListener('click', async function () {
  const result = await Swal.fire({
    title: 'Download Katalog',
    text: 'Pilih format file yang ingin diunduh:',
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'PDF',
    cancelButtonText: 'Excel',
    reverseButtons: true
  });

  // Data contoh (ganti dengan data asli Anda)
  const headers = ['Material', 'SKU', 'Description', 'NW', 'Volume'];
  const rows = barangJson.map(item => [
    item.id,
    item.sku,
    item.desc,
    item.nw.toFixed(3),
    item.volume.toFixed(3)
  ]);

  if (result.isConfirmed) {
    // ===== Cetak PDF pakai jsPDF =====
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFontSize(12);
    doc.text("Lists All Item", 14, 20);

    doc.autoTable({
      head: [headers],
      body: rows,
      startY: 30,
      theme: 'grid',
      styles: { fontSize: 8, cellPadding: 2 },
      headStyles: {
        fillColor: [0, 123, 255],
        textColor: [255, 255, 255],
        fontSize: 12,
        halign: 'center'
      },
      bodyStyles: { fillColor: [240, 240, 240] },
      columnStyles: {
        3: { halign: 'right' },
        4: { halign: 'right' }
      }
    });

    doc.save("my-catalog.pdf");

  } else if (result.dismiss === Swal.DismissReason.cancel) {
  // ========== ExcelJS versi styled ==========
  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet("Katalog");

  // Tambahkan header
  const headers = ['Material', 'SKU', 'Description', 'NW', 'Volume'];
  sheet.addRow(headers);

  // Tambahkan data
  barangJson.forEach(item => {
    sheet.addRow([
      item.id,
      item.sku,
      item.desc,
      parseFloat(item.nw.toFixed(3)),
      parseFloat(item.volume.toFixed(3))
    ]);
  });

  // Styling header
  const headerRow = sheet.getRow(1);
  headerRow.eachCell(cell => {
    cell.font = { bold: true, color: { argb: 'FFFFFFFF' } };
    cell.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: '007BFF' } // Bootstrap Primary
    };
    cell.alignment = { horizontal: 'center' };
    cell.border = {
      top: { style: 'thin' },
      bottom: { style: 'thin' }
    };
  });

  // Rata kanan kolom NW dan Volume
  sheet.getColumn(4).alignment = { horizontal: 'right' }; // NW
  sheet.getColumn(5).alignment = { horizontal: 'right' }; // Volume

  // Lebar kolom otomatis (atau manual)
  sheet.columns.forEach(column => {
    let maxLength = 10;
    column.eachCell({ includeEmpty: true }, cell => {
      const len = cell.value ? cell.value.toString().length : 0;
      if (len > maxLength) maxLength = len;
    });
    column.width = maxLength + 2;
  });

  // Autofilter
  sheet.autoFilter = {
    from: 'A1',
    to: 'E1'
  };

  // Simpan sebagai file Excel
  workbook.xlsx.writeBuffer().then(buffer => {
    const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
    saveAs(blob, "my-catalog.xlsx");
  });
}
});