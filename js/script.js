/* header */
Vue.component("header-el", {
    data : () => {
        return {
            menuList : [
                {name : "About", url : "./about.html"}
                , {name : "Movie", url : "./movie.html"}
                , {name : "Artist", url : "./artist.html"}
                , {name : "Audition", url : "./audition.html"}
                , {name : "Community", url : "./community.html"}
            ]
        }
    }
    , template : `  <header>
                        <div class="wrap">
                            <div class="logo">
                                <a href=""><img src="./img/logo_fm.png" alt="logo"></a>
                            </div>
                            <nav>
                                <ul>
                                    <li v-for="oneMenu of menuList"><a :href="oneMenu.url">{{oneMenu.name}}</a></li>
                                </ul>
                            </nav>
                        </div>
                    </header>`
});

/* banner */
Vue.component("banner-el", {
    data : () => {
        return {
            slide_img : [
                { name : "visual.png" }
                , { name : "visual_02.png" }
            ]
        }
    }
    , template : `  <div id="slider">
                        <div class="slide_frame">
                            <div v-for="oneBanner of slide_img" class="slide">
                                <div class="bgImg" :style="'background-image:url(./img/'+oneBanner.name+')'"></div>
                                <div class="dark"></div>
                            </div>
                        </div>
                        <div class="wrap">
                            <div class="text_part">
                                <h2>지금부터 당신의 영화가 시작됩니다.</h2>
                                <a href="#">오디션 참가</a>
                            </div>
                        </div>
                    </div>`
});

/* cont1 */
Vue.component("cont1-el", {
    data : () => {
        return {
            movieList : [
                { img : "cont_01.png", title : "죄많은 소녀 (After My Death, 2019)" }
                , { img : "cont_02.jpeg", title : "소공녀(MicroHabitat, 2020)" }
                , { img : "cont_03.jpg", title : "벌새 (House of Hummingbird, 2018)" }
            ]
        }
    }
    , template : `  <div id="movie">
                        <div class="wrap">
                            <h2>Today's Movie</h2>
                            <div class="content">
                                <div v-for="oneMovie in movieList" class="box">
                                    <div class="movie_item" :style="'background-image:url(./img/'+oneMovie.img+')'">
                                        <img src="./img/play_icon.png" alt="play_icon">
                                    </div>
                                    <h3>{{oneMovie.title}}</h3>
                                </div>
                            </div>
                        </div>
                    </div>`
});

/* bannermid */
Vue.component("bannermid-el", {
    data : () => {
        return {
            bannermidList : [
                { name : "visual_03.png" }
                , { name : "visual_04.png" }
            ]


        }
    }
    , template : `  <div id="slider_mid">
                        <div class="slide_frame">
                            <div v-for="oneBannerMid of bannermidList" class="slide">
                                <div class="bgImg" :style="'background-image:url(./img/'+oneBannerMid.name+')'"></div>
                                <div class="dark"></div>
                            </div>
                        </div>
                        <div class="wrap">
                            <div class="text_part">
                                <h2>Audition Schedule</h2>
                                <p>실시간으로 업데이트 되는 오디션 정보를 확인하실 수 있습니다. 배우 또는 배우 지망생분들의 많은 참여 바랍니다.</p>
                                <a href="#">오디션 정보 확인</a>
                            </div>
                        </div>
                    </div>`
});

/* actors */
Vue.component("actors-el", {
    data : () => {
        return {
            actorList : [
                { name:"전여빈", image:"yeobeen.png" }
                , { name:"김새벽", image:"saebyeok.png" }
                , { name:"이상희", image:"sanghee.png" }
                , { name:"김예은", image:"yeeun.png" }
                , { name:"이학주", image:"hakju.png" }
                , { name:"박정민", image:"jungmin.png" }
            ]
        }
    }
    , template : `<div id="actors">
                    <h2>Actors</h2>
                    <div class="wrap">
                        <div v-for="oneActor in actorList" class="bgImg" :style="'background-image:url(./img/'+oneActor.image+')'">
                            <div class="label">
                                <p>{{oneActor.name}}</p>
                                <a href="#">필모그래프</a>
                            </div>
                        </div>
                    </div>
                    <a href="#" class="more">더보기</a>
                </div>`
});

/* review */
Vue.component("review-el", {
    data : () => {
        return {
            reviewList : [
                { name : "김주영", image : "review1.jpg", review : "1차 오디션 합격 후, 감독님과의 직접 오디션을 보는 소중한 기회를 얻게 되었습니다. 감독님께서 제시하신 키워드에 맞게 준비한 연기를 보여드렸습니다. 연기가 끝나고 감독님께서는 호흡, 발음, 발성, 집중력 등 다각도에서 꼼꼼한 평을 해주셨습니다. 연기뿐만 아니라 프로필 사진에 대해서도 조언을 해주셨고, 제가 미처 생각하지 못했던 부분을 짚어주셔서 큰 도움을 받게 되었습니다."}
                , { name : "홍길동", image : "review2.jpg", review : "홍길동이 뭐라뭐라 말했습니다."}
                , { name : "김철수", image : "review3.jpg", review : "김철수가 뭐라뭐라 말했습니다."}
            ]
        }
    }
    , template : `<div id="review">
                    <div class="wrap" style="background-image: url(./img/content_03.png);">
                        <h2>Audition Reviewes</h2>
                        <div class="slide_frame">
                            <div v-for="oneReview in reviewList" class="slide">
                                <p>{{oneReview.review}}</p>
                                <div class="bgImg" :style="'background-image: url(./img/'+oneReview.image+');'"></div>
                                <p>{{oneReview.name}}</p>                   
                            </div>
                        </div>
                    </div>
                </div>`
});

/* footer */
Vue.component("footer-el", {
    data : () => {
        return { 
            footerMenuList : [
                {name : "이용약관"}
                , {name : "개인정보 취급방침"}
                , {name : "고객 상담실"}
            ]
            , company : {
                name : "Filmmakers"
                , ceo : "임지애"
                , number : "113-28-507"
                , address : "서울특별시 강남구 논현로"
                , director : "한상용"
            }
        };
    }
    , template : `<div id="footer">
                    <div class="wrap">
                        <div class="top">
                            <a v-for="oneMenu in footerMenuList" href="#">{{oneMenu.name}}</a>
                        </div>
                        <hr>
                        <div class="bottom">
                            <div class="bottom-left">
                                <p>{{company.name}} | 대표 : {{company.ceo}} | 사업자등록번호 : {{company.number}}</p>
                                <p>주소 : {{company.address}} | 개인정보관리책임자 : {{company.director}}</p>
                                <p>1999 - 2021 Filmmakers</p>
                            </div>
                            <div class="bottom-right">
                                <p>고객센터(이용 및 결제 문의) 제휴 및 대외 협력, 광고 문의</p>
                                <p>대표전화 : 02-1234-5678 | 카카오톡 플러스친구 : 필름메이커스</p>
                                <p>info@filmmakers.com</p>
                            </div>
                        </div>
                    </div>
                </div>`
});

new Vue({
    el : "#app"
});

// jquery 영역 (가동시점은 구조가 완성된 다음에 진행되어야 함)
$(document).ready(function() {
    $("#slider .slide_frame").slick({
        infinite : true
        , autoplay : true
        // slick의 기본 베이스 방향은 horizontal(좌우방향 이동)
        //, vertical : true // 수직방향으로 이동
        , fade : true
        , cssEase : 'linear'
    });

    $("#slider_mid .slide_frame").slick({
        infinite : true
        , autoplay : true
        // slick의 기본 베이스 방향은 horizontal(좌우방향 이동)
        //, vertical : true // 수직방향으로 이동
        , fade : true
        , cssEase : 'linear'
    });

    $("#review .slide_frame").slick({
        dots : true
        , arrows : false
        , infinite : true
        //, autoplay : true
        // slick의 기본 베이스 방향은 horizontal(좌우방향 이동)
        //, vertical : true // 수직방향으로 이동
        , fade : true
        , cssEase : 'linear'
        , adaptiveHeight: true
    });
});