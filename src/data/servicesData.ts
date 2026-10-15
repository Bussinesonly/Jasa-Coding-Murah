import type { ServiceItem } from '../types'

export const servicesData: ServiceItem[] = [
  {
    id: 'website',
    number: '01',
    title: 'Website',
    shortDesc: 'Company profile, landing page, personal website, website organisasi, dan website custom.',
    fullDesc: 'Website yang dirancang dengan estetika modern, kecepatan kilat, dan optimasi SEO menyeluruh untuk membangun kredibilitas brand Anda di ranah digital.',
    deliverables: [
      'Company Profile Perusahaan',
      'High-Converting Landing Page',
      'Website Organisasi & Komunitas',
      'Personal Portfolio & Blog Profesional',
      'Optimasi SEO on-page & Mobile First'
    ],
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    idealFor: 'Perusahaan, UMKM, Lembaga, dan Profesional yang ingin tampil terpercaya',
    badge: 'Paling Populer'
  },
  {
    id: 'web-application',
    number: '02',
    title: 'Web Application',
    shortDesc: 'Dashboard, sistem administrasi, sistem manajemen, dan aplikasi berbasis web.',
    fullDesc: 'Aplikasi berbasis web dengan interaktivitas tinggi, manajemen data terstruktur, autentikasi multi-level, dan integrasi API yang andal.',
    deliverables: [
      'Dashboard Analitik & Monitoring',
      'Sistem Administrasi Back-Office',
      'Portal Layanan Karyawan / Member',
      'Aplikasi Web Berbasis Peran (RBAC)',
      'Manajemen Database Terenkripsi'
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'REST API'],
    idealFor: 'Bisnis yang membutuhkan otomatisasi operasional dan pelaporan data terpusat',
    badge: 'Skalabilitas Tinggi'
  },
  {
    id: 'ecommerce',
    number: '03',
    title: 'E-Commerce',
    shortDesc: 'Toko online dengan katalog produk, checkout, manajemen pesanan, dan dashboard admin.',
    fullDesc: 'Solusi toko online mandiri tanpa potongan komisi pihak ketiga, dilengkapi katalog interaktif, kalkulator ongkir otomatis, dan alur checkout lancar.',
    deliverables: [
      'Katalog Produk Interaktif & Filter Cerdas',
      'Alur Checkout Cepat & Pembayaran Online',
      'Integrasi Notifikasi WhatsApp Otomatis',
      'Panel Manajemen Pesanan & Stok Barang',
      'Laporan Penjualan & Riwayat Transaksi'
    ],
    techStack: ['React', 'Next.js', 'Midtrans / Xendit API', 'Supabase'],
    idealFor: 'Pelaku usaha ritel, produsen lokal, dan brand UMKM yang ingin mandiri berjualan',
    badge: 'Konversi Penjualan'
  },
  {
    id: 'custom-system',
    number: '04',
    title: 'Custom System',
    shortDesc: 'Sistem digital yang dibuat berdasarkan workflow dan kebutuhan khusus client.',
    fullDesc: 'Pengembangan software khusus yang mengikuti alur kerja unik instansi Anda, tanpa kompromi keterbatasan template atau batasan software pabrikan.',
    deliverables: [
      'Analisis Kebutuhan & Desain Alur Kerja',
      'Sistem Informasi Akademik / Sekolah',
      'Sistem Reservasi & Antrean Digital',
      'Integrasi Webhook & Hardware / IoT',
      'Dokumentasi Lengkap & Pelatihan Penggunaan'
    ],
    techStack: ['Tailored Architecture', 'TypeScript', 'Custom Database', 'Cloud Server'],
    idealFor: 'Instansi pemerintah, institusi pendidikan, dan bisnis dengan workflow khusus',
    badge: 'Kustom'
  }
]
