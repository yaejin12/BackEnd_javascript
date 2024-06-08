const URL = "https://yts.mx/api/v2/list_movies.json";

const $movie = document.querySelector(".movie");

const renderPosts = (movies) => {
 
  movies.forEach((post) => {
    tag +=`
    <div class="movie">
    <div class="img-box">
      <img
        src="https://yts.mx/assets/images/movies/doctor_who_the_day_of_the_doctor_2013/large-cover.jpg"
        alt="표지사진"
      />
    </div>
    <div class="inner">
      <div class="title">제목</div>
      <div class="year">개봉년도</div>
      <div class="rating">평점</div>
    </div>
  </div>`
    const $template = document.getElementById("movie-post");
    const $movies = document.importNode($template.content, true);
    $movies.querySelector("title") = post.title;


  });
};
//초기 영화 정보 로딩
function fetchMovies(){
  // 서버에서 게시물 정보 받아오기
fetch(URL)
.then((res) => res.json())
.then((json) => {
  console.log(json);
  // 게시물 정보 화면에 그리기
  renderPosts(json.date.movies);
});
}


