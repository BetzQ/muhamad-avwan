  // Data keahlian
  const skills = [
    { name: 'HTML5', description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.', path: 'img/html.png' },
    { name: 'CSS3 (Tailwind, Bootstrap)', description: 'Deskripsi CSS.', path: 'img/css.png' },
    { name: 'JavaScript (ES6+)', description: 'Deskripsi JavaScript.', path: 'img/javascript.png' },
    { name: 'TypeScript', description: 'Deskripsi TypeScript.', path: 'img/typescript.png' },
    { name: 'React.js', description: 'Deskripsi React.js.', path: 'img/react.png' },
    { name: 'Redux', description: 'Deskripsi Redux.', path: 'img/redux.png' },
    { name: 'MaterialUI', description: 'Deskripsi MaterialUI.', path: 'img/materialui.png' },
    { name: 'Node.js', description: 'Deskripsi Node.js.', path: 'img/nodejs.png' },
    { name: 'Express.js', description: 'Deskripsi Express.js.', path: 'img/expressjs.png' },
    { name: 'MongoDB', description: 'Deskripsi MongoDB.', path: 'img/mongodb.png' },
    { name: 'MySQL', description: 'Deskripsi MySQL.', path: 'img/mysql.png' },
    { name: 'GitHub', description: 'Deskripsi GitHub.', path: 'img/github.png' },
    // Tambahkan keahlian lain sesuai kebutuhan
  ];
  
  
    // Mendapatkan elemen dengan ID 'my-skill'
    const mySkillContainer = document.getElementById('my-skill');
  
    // Membuat loop untuk setiap keahlian dan membuat elemen HTML sesuai
    skills.forEach(skill => {
      const skillElement = document.createElement('a');
      skillElement.href = '#';
      skillElement.className = 'transition-all duration-1000 bg-white hover:bg-gray-800 hover:shadow-xl m-2 p-4 relative z-40 group';
      skillElement.innerHTML = `
        <div class="absolute bg-gray-800/50 top-0 left-0 w-24 h-1 z-30 transition-all duration-200 group-hover:bg-white group-hover:w-1/2"></div>
        <div class="py-2 px-9 relative">
          <div class="rounded-full w-32 h-32 mb-5 border border-gray-400 bg-cover" style="background-image: url(${skill.path})"></div>
            <!-- SVG Path -->
          </svg>
          <h3 class="mt-8 text-lg font-semibold text-black group-hover:text-white">${skill.name}</h3>
        </div>
      `;
    //   <p class="mt-4 text-base text-gray-600 group-hover:text-white">${skill.description}</p>
      mySkillContainer.appendChild(skillElement);
    });
    window.addEventListener('scroll', function() {
        // Mendapatkan nilai scroll
        var scrollPosition = window.scrollY;
  
        // Menampilkan nilai scroll di konsol
        console.log('Scroll Position:', scrollPosition);
  
        // Mendapatkan elemen dengan class nav-custom
        var navElement = document.querySelector('.nav-custom');
        var navItems = document.querySelector('.nav-items');
  
        // Manipulasi class berdasarkan nilai scroll
        if (scrollPosition >= 96) {
          // Jika scroll position lebih dari atau sama dengan 96
          navElement.classList.remove('navbar','shadow');
          navElement.classList.add('fixed');
          navItems.classList.add('duration-300', 'md:mb-16','mb-14','md:pb-6','pb-8');
        } else {
          // Jika scroll position kurang dari 96
          navElement.classList.add('navbar','shadow');
          navElement.classList.remove('fixed');
          navItems.classList.remove('duration-300','fixed', 'md:mb-16','mb-14','md:pb-6','pb-8');
        }
      });
  
      document.addEventListener('DOMContentLoaded', function () {
        // Mendapatkan elemen anchor pertama
        var firstAnchor = document.querySelector('.nav-items a');
  
        // Menambahkan kelas pada elemen anchor pertama saat memuat halaman
        firstAnchor.classList.add('border-blue-500', 'dark:text-gray-200', 'text-gray-800');
  
        // Menambahkan event click pada setiap elemen anchor
        document.querySelectorAll('.nav-items a').forEach(function(anchor) {
          anchor.addEventListener('click', function(event) {
            // Mencegah tindakan default
            event.preventDefault();
  
            // Menghapus kelas dari semua elemen anchor
            document.querySelectorAll('.nav-items a').forEach(function(a) {
              a.classList.remove('border-blue-500', 'dark:text-gray-200', 'text-gray-800');
            });
  
            // Menambahkan kelas pada elemen anchor yang diklik
            this.classList.add('border-blue-500', 'dark:text-gray-200', 'text-gray-800');
  
            // Mendapatkan hash dari href dan menambahkannya ke URL
            var hash = this.getAttribute('href').substring(1); // menghilangkan karakter '#' di depan
            window.location.hash = hash;
          });
        });
      });
