import type { PortfolioProject } from '../types'

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'nexa-corporate',
    title: 'Nexa Advisory Corporate Portal',
    category: 'Business Website',
    description: 'Website company profile modern dengan tipografi kuat, animasi scroll halus, dan integrasi formulir penawaran interaktif.',
    fullDescription: 'Dirancang untuk firma konsultan manajemen yang membutuhkan kehadiran digital berkelas tinggi. Mengedepankan hierarki tipografi editorial, performa LCP 0.6 detik, dan formulir kualifikasi calon klien yang langsung tersambung ke WhatsApp representatif.',
    clientType: 'Korporasi & Bisnis Layanan',
    features: [
      'Struktur konten editorial yang meningkatkan otoritas brand',
      'Skor Google Lighthouse 98/100 pada uji kecepatan mobile',
      'CMS mandiri untuk publikasi artikel dan studi kasus',
      'Integrasi formulir pesan cepat terhubung WhatsApp resmi'
    ],
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
    highlightMetric: '98/100',
    highlightLabel: 'Skor Lighthouse Mobile',
    livePreviewType: 'business',
    accentColor: '#3B82F6'
  },
  {
    id: 'edusmart-school',
    title: 'Sistem Informasi Akademik & PPDB',
    category: 'School Information System',
    description: 'Sistem informasi sekolah terpadu mencakup portal penerimaan siswa baru (PPDB online), e-rapor, dan absensi digital.',
    fullDescription: 'Digitalisasi menyeluruh bagi institusi pendidikan swasta. Menggantikan proses manual pendaftaran berkas calon murid menjadi alur verifikasi digital terpusat, lengkap dengan pembayaran SPP otomatis dan pelaporan nilai siswa berbasis role (Guru, Siswa, Admin).',
    clientType: 'Sekolah & Institusi Pendidikan',
    features: [
      'Alur pendaftaran murid baru online dengan unggah dokumen PDF',
      'Verifikasi berkas dan pengumuman seleksi real-time',
      'Portal manajemen nilai siswa dan pencetakan rapor otomatis',
      'Hak akses berjenjang dengan autentikasi aman'
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    highlightMetric: '1,200+',
    highlightLabel: 'Pendaftar PPDB Terverifikasi',
    livePreviewType: 'school',
    accentColor: '#06B6D4'
  },
  {
    id: 'karafuru-commerce',
    title: 'Karafuru Artisan Roastery Platform',
    category: 'E-Commerce Platform',
    description: 'Platform toko online kopi spesialti dengan kalkulator ongkir dinamis, checkout langsung, dan manajemen inventaris varian.',
    fullDescription: 'Brand lokal roastery membutuhkan platform penjualan langsung ke konsumen (D2C) untuk menghindari potongan marketplace tinggi. Dilengkapi pemilihan grind size, estimasi ongkos kirim ke seluruh Indonesia, serta notifikasi status pesanan via WhatsApp.',
    clientType: 'UMKM & Brand Ritel Mandiri',
    features: [
      'Katalog produk dengan varian biji kopi dan ukuran kemasan',
      'Hitung ongkir otomatis terintegrasi kurir nasional',
      'Pembayaran QRIS dan transfer bank instan',
      'Konfirmasi pesanan instan ke WhatsApp pelanggan dan admin'
    ],
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'Midtrans API'],
    highlightMetric: '3.4x',
    highlightLabel: 'Kenaikan Pemesanan Langsung',
    livePreviewType: 'ecommerce',
    accentColor: '#10B981'
  },
  {
    id: 'omnitrack-dashboard',
    title: 'Omnitrack Inventory & Operasional',
    category: 'Management Dashboard',
    description: 'Dashboard administrasi dan sistem inventaris multi-gudang untuk pemantauan arus barang dan laporan berkala.',
    fullDescription: 'Aplikasi web internal perusahaan distributor bahan baku untuk memantau stok keluar-masuk, membuat surat jalan digital, dan menghasilkan grafik performa penjualan mingguan secara akurat tanpa pencatatan manual di spreadsheet yang rentan selisih.',
    clientType: 'Distributor & Logistik Operasional',
    features: [
      'Visualisasi grafik arus barang masuk dan keluar per gudang',
      'Peringatan otomatis saat stok barang di bawah ambang batas',
      'Pencatatan mutasi barang dengan riwayat log pengguna terperinci',
      'Ekspor laporan keuangan dan inventaris dalam format Excel dan PDF'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'REST API'],
    highlightMetric: '0.4s',
    highlightLabel: 'Kecepatan Query Data',
    livePreviewType: 'dashboard',
    accentColor: '#8B5CF6'
  }
]
