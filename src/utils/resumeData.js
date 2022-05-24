import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';

export const resumeData = {
    nama: "Akmalia Trias Agustin",
    title: "Full Stack Developer",
    alamat: "JL. Letnan Arsyad Raya No.49 ",
    telp: "0896-3765-0752",
    email: "akmaliatrias08@gmail.com",

    ig: 'https://www.instagram.com/akmaltrias_/',
    gitlab: 'https://gitlab.com/akmaltrias13',

    tentang: "Lulus dari jurusan Rekayasa Perangkat Lunak di SMK Negeri 1 Kota Bekasi. Saya bekerja dengan baik secara individu ataupun tim, senang mempelajari hal baru, tekun, dan bertanggung jawab. Memiliki kemampuan yang baik dalam berkomunikasi ataupun sebagai pemimpin melalui pengalaman dari organisasi yang telah di ikuti.",

    pengalaman: [
        {
            title: "PT. Bangun Kreatif Abadi",
            date: "Apr 2021 - Sept 2021",
            desc: "Membuat aplikasi berbasis web bersama tim sesuai dengan kasus yang diberikan mentor"
        }
    ],

    pendidikan: [
        {
            title: "SMK Negeri 1 Kota Bekasi",
            date: "2019 - sekarang",
            desc: "Pelajar dari jurusan Rekayasa Perangkat Lunak (RPL) dan senang mengikuti organisasi seperti Ekskul dan OSIS disekolah."
        }, 
        {
            title: "SMP Negeri 4 Kota Bekasi",
            date: "2016 - 2019",
            desc: "Pelajar yang senang mengikuti berbagai acara sekolah, dan turut menjadi bagian kepanitiaan acara."
        }
    ],

    tech: [
        {
            title: "Front-End",
            desc: [
                'React.js',
                'HTML',
                'CSS',
                'Javascript'
            ]
        },
        {
            title: "Back-End",
            desc: ['Node.js', 'PHP']
        },
        {
            title: "Database",
            desc: ["MySQL", "PostgreSQL"]
        },
    ],

    kemampuan: [
        {
            title: "Komunikasi",
            desc: "Dapat berkomunikasi secara baik dengan perorangan ataupun di depan umum. Pernah menjadi MC pada kegiatan OSIS seperti LDKS dan MPLS.",
            icon: <QuestionAnswerOutlinedIcon />
        }, 
        {
            title: "Leadership",
            desc: "Pernah menjabat sebagai wakil ketua OSIS 2 pada periode 2020/2021. Bertanggung jawab atas seluruh pengurus OSIS dan program kerja yang dijalani.",
            icon: <PeopleAltOutlinedIcon />
        },
        {
            title: "Problem Solving",
            desc: "Dapat menganalisa dan mencari solusi dari masalah-masalah yang dihadapi sesuai fakta, bukti, juga penalaran logika.",
            icon: <FactCheckOutlinedIcon />
        }
    ]

}