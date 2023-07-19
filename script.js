*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Comic Neue', cursive;
    list-style: none;
    text-decoration: none;
}
header{
    position: fixed;
    right: 0;
    top: 0;
    z-index: 1000;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 33px 9%;
    background: transparent;
}
.logo{
    font-size: 30px;
    font-weight: 700;
    color: white;
}
.nav-links{
    display: flex;
}
.nav-links a {
    color: white;
    margin-left: 60px;
    font-size: 15px;
    font-weight: 600;
    border-bottom: 2px solid transparent;
    transition: all .55s ease;
}
.nav-links a:hover{
    border-bottom: 2px solid white;
}
#menu-icon{
    color: white;
    font-size: 30px;
    z-index: 10001;
    cursor: pointer;
    display: none;
}
.hero{
    height: 100%;
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(245.59deg, #4d9559 0%,#38703d 28.53%,#133917 75.52%);
    position: relative;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    align-items: center;
    gap: 2rem;
}
section{
    padding: 0 19%;
}
.hero-text h5{
    font-size: 14px;
    font-weight: 400;
    color: white;
    margin-bottom: 40px;
}
.hero-text h1{
    font-family: 'Goblin One', cursive;
    font-size: 90px;
    line-height: 1;
    color: white;
    margin: 0 0 45px;
}
.hero-text h4{
    font-size: 18px;
    font-weight: 600;
    color:white;
    margin-bottom: 10px;
}
.hero-text p{
    color: white;
    font-size: 15px;
    line-height: 1.9;
    margin-bottom: 40px;
}
.hero-img{
    width: 700px;
    height: auto;
}
.hero-text a{
    display: inline-block;
    color: white;
    background: #4d9559;
    border: 1px solid transparent;
    padding: 12px 30px;
    line-height: 1.4;
    font-size: 14px;
    font-weight: 500;
    border-radius: 30px;
    text-transform: uppercase;
    transition: all .55s ease;
}
.hero-text a:hover{
    background: transparent;
    border: 1px solid white;
    transform: translateX(8px);
}
.hero-text a.ctaa{
    background: transparent;
    border: 1px solid white;
    margin-left: 20px;
}
.hero-text a.ctaa i{
    vertical-align: middle;
    margin-right: 5px;
}
.icons{
    position: absolute;
    top: 50%;
    padding: 0 9%;
    transform: translateY(-50%);
}
.icons i{
    display: block;
    margin: 26px 0;
    font-size: 24px;
    color: white;
    transition: all .50s ease;
}
.icons i:hover{
    color: #4d9559;
    transform: translateY(-5px);
}
.scroll-down{
    position: absolute;
    bottom: 6%;
    right: 9%;
}
.scroll-down i{
    display: block;
    padding: 12px;
    font-size: 25px;
    color:white;
    background: #4d9559;
    border-radius: 30px;
    transition: all .50s ease;
}
.scroll-down i:hover{
    transform: translateY(-5px);
}

@media(max-width: 1535px){
    header{
        padding: 15px 3%;
        transition: .2s;
    }
    .icons{
        padding: 0 3%;
        transition: .2s;
    }
    .scroll-down{
        right: 3%;
        transition: .2s;
    }
}
@media(max-width: 1460px){
    section{
        padding: 0 12%;
        transition: .2s;
    }
}
@media(max-width: 1340px){
    .hero-img img{
        width: 100%;
        height: auto;
    }
    .hero-text h1{
        font-size: 75px;
        margin: 0 0 30px;
    }
    .hero-text h5{
        margin-bottom: 25px;
    }
}
@media(max-width: 1195px){
    section{
        padding: 0 3%;
        transition: .2s;
    }
    .hero-text{
        padding-top: 115px;
    }
    .hero-img{
        text-align: center;
    }
    .hero-img img{
        width: 560px;
        height: auto;
    }
    .hero{
        height: 100%;
        gap: 1rem;
        grid-template-columns: 1fr;
    }
    .icons{
        display: none;
    }
    .scroll-down{
        display: none;
    }
}
@media(max-width: 990px){
    #menu-icon{
        display: block;
    }
    .nav-links{
        position: absolute;
        top:100%;
        right: -100%;
        width: 300px;
        height: 40vh;
        background-color: #4d9559;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 50px 20px;
        transition: all .55s ease;
    }
    .nav-links a{
        display: block;
        margin-left: 0;
        display: block;
        margin: 7px 0;
    }
    .nav-links.open{
        right: 0;
    }
}
@media(max-width: 680px){
    .hero-img img{
        width: 100%;
        height: auto;
    }
}
