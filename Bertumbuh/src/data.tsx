export const navigationLinks = [
	{
		to: '/',
		linkName: 'Home'
	},
	{
		to: '/collaboration',
		linkName: 'Kemitraan'
	},
	{
		to: '/about',
		linkName: 'Tentang'
	},
	{
		to: '/weeneed',
		linkName: 'Kami Butuh Kamu'
	},
	{
		to: '/blog',
		linkName: 'Post'
	},
	{
		to: '/newsletter',
		linkName: 'Newsletter'
	}
]

export const POSTS = [
	{
		title: 'Posts',
		links: [
			{
				to: '/blog',
				linkName: 'Berita'
			},
			{
				to: '/blog',
				linkName: 'Event'
			},
			{
				to: '/blog',
				linkName: 'Blog'
			}
		]
	}
]
export const PROGRAMS = [
	{
		title: 'Programs',
		links: [
			{
				to: '',
				linkName: 'Jelajah bersama'
			},
			{
				to: '',
				linkName: 'Tanam Pohon'
			},
			{
				to: '',
				linkName: 'Sosialisasi Hutan'
			}
		]
	}
]
export const ALAMAT = [
	{
		title: 'Alamat',
		address: [
			'Jl. Kh. Wahid Hasyim No.76, Cipeujeuh Wetan, Kec. Lemahabang, Kabupaten Cirebon, Jawa Barat, 45183',
			'(0231) 635308',
			'surat@smkn1emahabang.sch.id'
		]
	}
]

import { Facebook, Instagram, Mail, Twitter } from 'lucide-react'

export const socialMedia = [
	{
		to: '',
		icon: Instagram
	},
	{
		to: '',
		icon: Facebook
	},
	{
		to: '',
		icon: Mail
	},
	{
		to: '',
		icon: Twitter
	}
]

export const donaturLevel = [
	{
		icon: '/donatur.svg',
		description:
			'Anda dapat membantu dengan berdonasi untuk biaya penanaman, perwatan, bibit dan biaya oprasional lainnya',
		button: 'Menjadi Donatur',
		link: '/donasi'
	},
	{
		icon: '/people.svg',
		description:
			'Kamu dapat membantu bertumbuh dengan menjadi relawan kami. Kamu dapat langsung menanam pohon, membantu berkebun, melakukan sosialisasi dan program-program menarik lainnya',
		button: 'Menjadi Relawan',
		link: '/register'
	},
	{
		icon: '/petani.svg',
		description:
			'Kamu akan belajar tentang cara  menanam pohon, merawat pohon serta hal lain dengan bergabung sebagai petani',
		button: 'Menjadi petani',
		link: '/'
	}
]
