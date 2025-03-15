// list item file JSON
const barangJson = [
    { "id":89900195, "sku": "KF03", "desc": "FHP53 8SX16X3X20 BNN 100FM KF03", "nw": 9.95, "volume": 0.078},
    { "id":89900058, "sku": "KF70", "desc": "FRF42 1000GX16 CNE 100PE KF70", "nw": 16, "volume": 0.104},
    { "id":89900054, "sku": "KF71", "desc": "FTV42 50SX80 BNE 100PE KF71", "nw": 3.79, "volume": 0.03},
    { "id":89900059, "sku": "KF72", "desc": "FRF42 400GX32 BNE 100PE KF72", "nw": 12.8, "volume": 0.093},
    { "id":89900227, "sku": "KF88", "desc": "FSP 42 220s X 2 X 24 CNE 100 KF88", "nw": 11.12, "volume": 0.072},
    { "id":89900090, "sku": "KT08", "desc": "WIF42 150SX20 BNP 101PE KT08", "nw": 6.83, "volume": 0.047},
    { "id":89900178, "sku": "KT10", "desc": "WRP52 60sx6x6 BNF 100FM C45 KT10", "nw": 4.6, "volume": 0.088},
    { "id":89900143, "sku": "MHT150PA", "desc": "WIF31 150sx2x10 BNF 100PE MHT150PA", "nw": 5.9, "volume": 0.047},
    { "id":89900100, "sku": "MJRT700", "desc": "TJR32 700GX16 CNN 100PE C76 MJRT700", "nw": 10.56, "volume": 0.078},
    { "id":89900212, "sku": "MN01B", "desc": "NLC 21 100Sx6x10 BNF 100 MN01B", "nw": 4.86, "volume": 0.104},
    { "id":89900039, "sku": "MP01", "desc": "FSP22 260SX40 BNE 100PE MP01", "nw": 11.36, "volume": 0.077},
    { "id":89900040, "sku": "MP01MU", "desc": "FSP22 260SX4X10 BNE 100PE MP01MU", "nw": 11.36, "volume": 0.077},
    { "id":89900221, "sku": "MP04", "desc": "FRF 600g x 16 CNE 100 MP04", "nw": 9.6, "volume": 0.06},
    { "id":89900056, "sku": "MP08", "desc": "FRF22 1000GX16 BNE 100PE MP08", "nw": 16, "volume": 0.108},
    { "id":89900241, "sku": "MP11", "desc": "FSP22 160SX60 CNE 100PE MP11", "nw": 7.7, "volume": 0.054},
    { "id":89900222, "sku": "MP11MU", "desc": "FSP22 160sx4x15 CNE 100 MP11MU", "nw": 8.66, "volume": 0.054},
    { "id":89900228, "sku": "MP11MUG", "desc": "FSP22 160sx4x15 CNE 100 MP11MUG", "nw": 8.66, "volume": 0.054},
    { "id":89900247, "sku": "MP12", "desc": "FSP22 250SX40 CNE 100 MP12", "nw": 8.66, "volume": 0.059},
    { "id":89900159, "sku": "MPH200-48MU", "desc": "FPU32 200sx4x12 CNE 100  MPH200-48MU", "nw": 5.05, "volume": 0.034},
    { "id":89900235, "sku": "MPK200MU", "desc": "NLC21 200sX10X10 CNF 100 MPK200MU", "nw": 7.02, "volume": 0.056},
    { "id":89900213, "sku": "MUB", "desc": "NLC 21 100Sx6x10 BNF 100 MN01 MUB", "nw": 4.86, "volume": 0.104},
    { "id":89900014, "sku": "PB02", "desc": "TPWC12 328SX6X16 BNE 100PE C45 PB02", "nw": 9.6, "volume": 0.093},
    { "id":89900250, "sku": "PB07BR", "desc": "TPNC22 300GX10 CND 106 PB07BR", "nw": 3, "volume": 0.047},
    { "id":89900252, "sku": "PB07HJ", "desc": "TPNC22 300GX10 CND 106 PB07HJ", "nw": 3, "volume": 0.047},
    { "id":89900251, "sku": "PB07KN", "desc": "TPNC22 300GX10 CND 106 PB07KN", "nw": 3, "volume": 0.047},
    { "id":89900253, "sku": "PB07OR", "desc": "TPNC22 300GX10 CND 106 PB07OR", "nw": 3, "volume": 0.047},
    { "id":89900249, "sku": "PB07PI", "desc": "TPNC22 300GX10 CND 106 PB07PI", "nw": 3, "volume": 0.047},
    { "id":89900248, "sku": "PB07UG", "desc": "TPNC22 300GX10 CND 106 PB07UG", "nw": 3, "volume": 0.047},
    { "id":89900226, "sku": "PB08", "desc": "TPWC 14 220s X 4 X 16 ANO 20I PB08", "nw": 9.6, "volume": 0.114},
    { "id":89900021, "sku": "PB09", "desc": "TPWC22 180SX10X10 BND 100PE C45 PB09", "nw": 5, "volume": 0.081},
    { "id":89900022, "sku": "PB10", "desc": "TPWC22 220SX10X10 BND 100PE C45 PB10", "nw": 6.6, "volume": 0.106},
    { "id":89900016, "sku": "PB16", "desc": "TPWC13 300SX8X8 BNE 200FM C45 PB16", "nw": 8.64, "volume": 0.079},
    { "id":89900018, "sku": "PB23", "desc": "TPWC13 300SX12X8 BNE 100PE C45 PB23", "nw": 12.96, "volume": 0.12},
    { "id":89900081, "sku": "THSN01", "desc": "WIF12 150SX20 BNP 100PE THSN01", "nw": 6.83, "volume": 0.05},
    { "id":89900082, "sku": "THSN02", "desc": "WIF12 150SX20 BNP 201PE THSN02", "nw": 6.83, "volume": 0.05},
    { "id":89900106, "sku": "TL05MU", "desc": "FBX12 200SX4X8 BNE 300PE TL05MU", "nw": 6.74, "volume": 0.076},
    { "id":89900067, "sku": "TM05", "desc": "FBX12 120SX40 BNE 300FM  TM05", "nw": 5.05, "volume": 0.073},
    { "id":89900068, "sku": "TM05MU", "desc": "FBX12 120SX5X8 BNE 300FM  TM05MU", "nw": 5.05, "volume": 0.073},
    { "id":89900114, "sku": "TM06MU", "desc": "FBX13 120sx5x8 BNE 300FM  TM06MU", "nw": 7.58, "volume": 0.073},
    { "id":89900072, "sku": "TN07", "desc": "NLC11 50SX60 BNF 100PE TN07", "nw": 4.86, "volume": 0.104},
    { "id":89900073, "sku": "TN07MU", "desc": "NLC11 50SX6X10 BNF 100PE TN07MU", "nw": 4.86, "volume": 0.104},
    { "id":89900074, "sku": "TN08", "desc": "NLC11 50SX60 BNF 201PE TN08", "nw": 4.86, "volume": 0.104},
    { "id":89900077, "sku": "TN10", "desc": "NDN12 50SX24 BNB 100PE TN10", "nw": 6.91, "volume": 0.049},
    { "id":89900141, "sku": "TN10PA", "desc": "NDN12 50sx2x12 BNB 100PE TN10PA", "nw": 6.91, "volume": 0.049},
    { "id":89900002, "sku": "TOD02", "desc": "TRS12 180GX64 BNE 100PE C45 TOD02", "nw": 11.52, "volume": 0.101},
    { "id":89900003, "sku": "TOD02MU", "desc": "TRS12 180GX8X8 BNE 100PE C45 TOD02MU", "nw": 11.52, "volume": 0.101},
    { "id":89900008, "sku": "TOK78", "desc": "TRS52 130SX48 BND 100PE C45 TOK78", "nw": 2.03, "volume": 0.043},
    { "id":89900009, "sku": "TOK79", "desc": "TRS52 130SX6X8 BND 100PE C45 TOK79", "nw": 2.03, "volume": 0.043},
    { "id":89900153, "sku": "TOM02BD", "desc": "TRS22 193sx10x10 BND 100 C45 TOM02BD", "nw": 5.5, "volume": 0.077},
    { "id":89900156, "sku": "TOM02GR", "desc": "TRS22 193sx100 BND 100 C45 TOM02GR", "nw": 5.5, "volume": 0.077},
    { "id":89900000, "sku": "TOT04", "desc": "TRS12 110GX100 BNE 100PE C45 TOT04", "nw": 11, "volume": 0.102},
    { "id":89900231, "sku": "TP02AB", "desc": "FSP12 260SX40 BDE 200FM TP02AB", "nw": 12.07, "volume": 0.082},
    { "id":89900232, "sku": "TP02MUAB", "desc": "FSP12 260SX2X20 BDE 200FM TP02MUAB", "nw": 12.07, "volume": 0.082},
    { "id":89900181, "sku": "TP02MUC", "desc": "FSP12 260sx2x20 BNE 200FM  TP02MUC", "nw": 14.16, "volume": 0.1},
    { "id":89900032, "sku": "TP02MUEX", "desc": "FSP12 260sx2x20 BNE 200FM  TP02MUEX", "nw": 12.07, "volume": 0.081},
    { "id":89900036, "sku": "TP06PA", "desc": "FSP12 200SX2X20 CNE 100PE TP06PA", "nw": 9.29, "volume": 0.065},
    { "id":89900216, "sku": "TP06PAC", "desc": "FSP12 200SX2X20 CNE 100 TP06PAC", "nw": 9.29, "volume": 0.062},
    { "id":89900196, "sku": "TP06PAL", "desc": "FSP12 200SX2X20 CNE 100 TP06PAL", "nw": 9.29, "volume": 0.062},
    { "id":89900215, "sku": "TP06PAN", "desc": "FSP12 200SX2X20 CNE 100 TP06PAN", "nw": 9.29, "volume": 0.065},
    { "id":89900198, "sku": "TP07", "desc": "FSP13 120SX40 BNE 201 TP07", "nw": 9.29, "volume": 0.071},
    { "id":89900158, "sku": "TP08", "desc": "FTV13 60sx48 ALE 201  TP08", "nw": 5.02, "volume": 0.035},
    { "id":89900046, "sku": "TP09", "desc": "FTV13 50SX48 BNE 200PE TP09", "nw": 3.76, "volume": 0.029},
    { "id":89900210, "sku": "TP09MUC", "desc": "FTV13 50Sx4x12 BNE 200 TP09MUC", "nw": 3.76, "volume": 0.029},
    { "id":89900244, "sku": "TP10", "desc": "FSP13 150SX40 ALE 200FM TP10", "nw": 11.61, "volume": 0.075},
    { "id":89900239, "sku": "TP11", "desc": "FTV12 50sx80 CNE 100PE TP11", "nw": 3.37, "volume": 0.024},
    { "id":89900236, "sku": "TP12", "desc": "FSP13 120SX4X10 ANE 201 TP12", "nw": 9.29, "volume": 0.072},
    { "id":89900049, "sku": "TP18", "desc": "FTV12 50SX60 BNE 200FM  TP18", "nw": 2.31, "volume": 0.018},
    { "id":89900245, "sku": "TP20", "desc": "FTV13 50SX48 ALE 200FM TP20", "nw": 4.18, "volume": 0.03},
    { "id":89900038, "sku": "TP22", "desc": "FSP12 250SX40 CNE 100PE TP22", "nw": 10.53, "volume": 0.068},
    { "id":89900070, "sku": "TPC25", "desc": "FHS13 10SX6X48 BNB 100PE TPC25", "nw": 4.67, "volume": 0.04},
    { "id":89900071, "sku": "TPC25MU", "desc": "FHS13 10SX6X2X24 BNB 100PE TPC25MU", "nw": 4.67, "volume": 0.04},
    { "id":89900085, "sku": "TTP01", "desc": "WRP12 70SX3X6 BNF 100PE C45 TTP01", "nw": 2.72, "volume": 0.048},
    { "id":89900184, "sku": "TTP02", "desc": "WRS12 100sx24 BNF 201  TTP02", "nw": 5.82, "volume": 0.106},
    { "id":89900218, "sku": "TTP03", "desc": "WRP12 100sx2x12 BNF 201  TTP03", "nw": 5.82, "volume": 0.09},
];

// view list in dropdown
window.onload = function() {
    const barangSelect = document.getElementById('barang');

    barangJson.forEach(barang => {
        const option = document.createElement('option');
        option.value = barang.id;
        option.textContent = barang.sku;
        barangSelect.appendChild(option);
    });
}

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
        alert('Harap pilih barang dan masukkan jumlah yang valid!');
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
    editButton.onclick = function() {
        const newQty = prompt('Masukkan jumlah baru:', jumlah);
        if (newQty && newQty > 0) {

            //get old value in row
            const oldQty = rowQty.innerText;
            const oldNw = rowNW.innerText;
            const oldVolume = rowVolume.innerText;

            //set new value
            const newNW = barang.nw * newQty;
            const newVolume = barang.volume * newQty;
            rowQty.textContent = newQty;
            rowNW.textContent = `${newNW.toFixed(3)}`;
            rowVolume.textContent = `${newVolume.toFixed(3)}`;

            //update all sum
            sumAllCt -= oldQty;
            sumAllCt += Number(newQty); 
            sumAllNW -= oldNw;
            sumAllNW += Number(newNW);
            sumAllVolume -= oldVolume;
            sumAllVolume += Number(newVolume);

            document.getElementById('total-ct').value = `${sumAllCt}`;
            document.getElementById('total-nw').value = `${sumAllNW.toFixed(3)}`;
            document.getElementById('total-volume').value = `${sumAllVolume.toFixed(3)}`;
        }
    };
    containerButton.appendChild(editButton);

    //delete
    const deleteButton = document.createElement('button');
    const clsDelete = ["edit", "btn", "btn", "btn-sm", "btn-danger"]
    deleteButton.classList.add(...clsDelete);
    deleteButton.style.minWidth = '100px';
    deleteButton.textContent = 'Hapus';
    deleteButton.onclick = function() {

        sumAllCt -= rowQty.innerText;
        sumAllNW -= rowNW.innerText;
        sumAllVolume -= rowVolume.innerText;

        document.getElementById('total-ct').value = `${sumAllCt}`;
        document.getElementById('total-nw').value = `${sumAllNW.toFixed(3)}`;
        document.getElementById('total-volume').value = `${sumAllVolume.toFixed(3)}`;

        tableBody.removeChild(row);
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
document.getElementById('catalog').addEventListener('click', function(){
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Menambahkan judul
    doc.setFontSize(12);
    doc.text("Lists All Item", 14, 20);

    // Menambahkan tabel dari data JSON
    const startY = 30;
    const margin = 10;

    // Menambahkan header tabel
    const headers = ['Material', 'SKU', 'Description', 'NW', 'Volume'];
    const rows = barangJson.map(item => [item.id, item.sku, item.desc, item.nw.toFixed(3), item.volume.toFixed(3)]);

    doc.autoTable({
      head: [headers],
      body: rows,
      startY: startY,
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

    // Menyimpan PDF
    doc.save("my-catalog.pdf");
})
