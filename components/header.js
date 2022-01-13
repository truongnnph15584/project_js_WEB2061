const Header = {
    print() {
        return `
        <div class="relative header bg-indigo-600 content-center h-30 ">
        <span class="absolute top-5 left-5 text-white"><a href="/signup">Đăng Ký</a> / <a href="/signin">Đăng Nhập</a></span>
        <span class="absolute text-white right-5 top-5"><a href="">Quản trị viên</a></span>
          <a href=""> <img class="w-20 m-auto py-3" src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png" alt=""></a>
        </div>
        <div class="bg-orange-400 h-10 grid grid-cols-4 ">
          <ul class="flex justify-around leading-9 col-span-3 w-3/4 text-white">
            <li><a href="">hello</a></li>
            <li><a href="">hello</a></li>
            <li><a href="">hello</a></li>
            <li><a href="">hello</a></li>
            <li><a href="">hello</a></li>
            <li><a href="">hello</a></li>
          </ul>
        </div>`
    }
}


export default Header