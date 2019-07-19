<template>
    <div class="d-flex" id="wrapper">
        <div class="bg-light border-right" id="sidebar-wrapper">
            <div class="sidebar-heading">Start Bootstrap</div>
            <div class="list-group list-group-flush">
                <router-link to="/" class="list-group-item list-group-item-action bg-light">Home</router-link>
                <router-link to="/users" class="list-group-item list-group-item-action bg-light">ユーザ一覧</router-link>
                <router-link to="/user/new" class="list-group-item list-group-item-action bg-light">新規ユーザ登録
                </router-link>
                <router-link to="/productList" class="list-group-item list-group-item-action bg-light">商品一覧</router-link>
                <!--            <router-link to="/login">ログイン</router-link>-->
                <router-link to="/login" v-show="!auth.loggedIn()"
                             class="list-group-item list-group-item-action bg-light">ログイン
                </router-link>
                <router-link to="/logout" v-show="auth.loggedIn()"
                             class="list-group-item list-group-item-action bg-light">ログアウト
                </router-link>

            </div>
            <!--     <button class="btn btn-primary" id="menu-toggle">Toggle Menu</button>-->
        </div>

        <div id="page-content-wrapper">
            <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                <button class="btn btn-primary" id="menu-toggle">Toggle Menu</button>

                <button class="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </a>
                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
            <div id="main">
                <router-view v-bind:usersData="usersData"></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import Auth from '../services/Authentication'
    // import UsersList from '../components/usersList'
    import dt from '../components/usersData';

    let usersData = dt.getData();

    export default {
        name: 'app',
        // components: {UsersList},
        data() {
            return {
                auth: Auth,
                usersData: usersData
            }
        }
    }
</script>
<!--TODO CLICK DONT WORK YET $click maybe??-->
<!--&lt;!&ndash; Bootstrap core JavaScript &ndash;&gt;-->
<!--<script src="../assets/css/startbootstrap-simple-sidebar-gh-pages/vendor/jquery/jquery.min.js"></script>-->
<!--<script src="../assets/css/startbootstrap-simple-sidebar-gh-pages/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>-->

<!--&lt;!&ndash; Menu Toggle Script &ndash;&gt;-->
<!--<script>-->
<!--    $("#menu-toggle").click(function (e) {-->
<!--        e.preventDefault();-->
<!--        $("#wrapper").toggleClass("toggled");-->
<!--    });-->
<!--</script>-->

<style>
    #main {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    #main h2 {
        color: #007bff;
    }
</style>
<style src="../assets/css/startbootstrap-simple-sidebar-gh-pages/vendor/bootstrap/css/bootstrap.min.css"></style>
<style src="../assets/css/startbootstrap-simple-sidebar-gh-pages/css/simple-sidebar.css"></style>

