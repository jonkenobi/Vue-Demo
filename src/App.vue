<template>
    <div class="d-flex" id="wrapper">
        <div class="bg-light border-right" id="sidebar-wrapper">
            <div class="sidebar-heading">Vue.js DEMO</div>
            <div class="list-group list-group-flush">
                <router-link to="/" class="list-group-item list-group-item-action bg-light">Home</router-link>
                <router-link to="/users" class="list-group-item list-group-item-action bg-light">ユーザ一覧</router-link>
                <router-link to="/user/new" class="list-group-item list-group-item-action bg-light">新規ユーザ登録
                </router-link>
                <router-link to="/productList" class="list-group-item list-group-item-action bg-light">商品一覧
                </router-link>
            </div>
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
                        <li class="nav-item  active">
                            <!--                   <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"-->
                            <router-link to="/" class="nav-link">
                                <v-layout justify-space-around>
                                    <v-icon medium>home</v-icon>
                                </v-layout>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/login" v-show="!auth.loggedIn()"
                                         class="nav-link">ログイン
                            </router-link>
                            <router-link to="/logout" v-show="auth.loggedIn()"
                                         class="list-group-item list-group-item-action bg-light">ログアウト
                            </router-link>
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
                <router-view v-bind:usersData="usersData" v-bind:CurrentBalance="CurrentBalance"></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import Auth from './services/Authentication'
    import {mapState} from 'vuex'

    export default {
        name: 'app',
        data() {
            return {
                auth: Auth,
            }
        },
        computed: {
            ...mapState({
                "usersData": state => state.users.usersData,
                "CurrentBalance": state => state.cashOperations.CurrentBalance
            })
        }
    }
</script>
<!--TODO TOGGLE MENU button on CLICK doesn't WORK YET $ not evaluated$click maybe??-->
<!-- Bootstrap core JavaScript -->
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
        margin-top: 20px;
    }

    #main h2 {
        color: #007bff;
    }

    /*button, input, textarea {*/
    /*    background-color: white;*/
    /*    border-style: groove;*/
    /*}*/

    /*button, input {*/
    /*    padding: 1px 3px 1px 3px;*/
    /*}*/
</style>
<style src="./assets/css/startbootstrap-simple-sidebar-gh-pages/vendor/bootstrap/css/bootstrap.min.css"></style>
<style src="./assets/css/startbootstrap-simple-sidebar-gh-pages/css/simple-sidebar.css"></style>

