import type { ProcessStep } from '../types'

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Diskusi & Konsultasi',
    desc: 'Kami mendengarkan ide, target audiens, dan masalah bisnis yang ingin Anda selesaikan untuk menentukan arah solusi digital yang paling tepat.',
    deliverables: 'Ringkasan kebutuhan (project brief) dan rekomendasi jenis website/aplikasi',
    duration: '1-2 Hari'
  },
  {
    number: '02',
    title: 'Perencanaan & Arsitektur',
    desc: 'Menyusun struktur halaman (sitemap), diagram alur pengguna (user flow), serta pemilihan teknologi yang paling efisien dan hemat biaya server.',
    deliverables: 'Daftar fitur detail, estimasi waktu pengerjaan, dan skema penawaran transparan',
    duration: '2-3 Hari'
  },
  {
    number: '03',
    title: 'Desain Antarmuka (UI/UX)',
    desc: 'Merancang tata letak visual yang modern, tipografi berkarakter, dan pengalaman pengguna yang intuitif sebelum penulisan baris kode pertama.',
    deliverables: 'Pratinjau visual antarmuka desktop dan mobile untuk Anda tinjau',
    duration: '3-7 Hari'
  },
  {
    number: '04',
    title: 'Pengembangan (Development)',
    desc: 'Menerjemahkan rancangan visual menjadi kode program yang bersih, cepat, modular, dan terstruktur sesuai standar web modern.',
    deliverables: 'Aplikasi berjalan di server staging privat yang dapat Anda coba langsung',
    duration: '1-3 Minggu'
  },
  {
    number: '05',
    title: 'Pengujian & Optimasi (Testing)',
    desc: 'Memastikan seluruh tombol, alur formulir, performa kecepatan di smartphone, dan keamanan data berjalan sempurna tanpa celah.',
    deliverables: 'Laporan pengujian lintas perangkat, audit kecepatan, dan perbaikan detail',
    duration: '2-4 Hari'
  },
  {
    number: '06',
    title: 'Peluncuran & Serah Terima (Launch)',
    desc: 'Website atau sistem resmi dihubungkan ke domain utama Anda, siap diakses publik, disertai panduan pengoperasian mandiri.',
    deliverables: 'Domain & hosting aktif, akses akun admin, dan garansi pemeliharaan teknis',
    duration: '1 Hari'
  }
]
