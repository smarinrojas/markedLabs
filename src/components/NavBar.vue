<template>
    <nav>
        <div class="navbar-container">
            <div class="navbar-brand">
                <router-link to="/">
                    MarketLabs
                </router-link>
            </div>
            <div class="navbar-content ">
                <div class="nav-item" v-if="!this.$store.state.userLogged">
                    <i class="el-icon-user"></i>
                </div> 

                <div class="nav-item user-name" v-if="this.$store.state.userLogged">
                    {{this.$store.state.loginData.userName}}
                </div>

                <div @click="(showNavbar = true)"  class="nav-item">
                    <i class="el-icon-more-outline"></i>
                </div> 

                <div :class="{'show-navbar': showNavbar}" class="navbar-links-container">
                    <router-link to="/">Home</router-link> 
                    <router-link to="/about">About</router-link>
                </div>

            </div>
        </div>
       
        <SearchInput></SearchInput>
    </nav>
</template>

<style lang="scss" scoped>
    nav{
        background: $primary;
        padding: 3rem 1rem 1.5rem 1rem;
        
        .navbar-container{
            display: flex;
            
            align-items: center;
            a{
                text-decoration-line: none;
            }
            .navbar-brand{
                a{
                    color: $success;
                    font-size: 2rem;
                    font-weight: 400;
                }
            }
            .navbar-content{
                display: flex;
                margin-left: auto;
                position: relative;

                .nav-item{
                    color: #fff;
                    margin: .5rem;
                    font-size: 1.5rem;
                }
                .user-name{
                    font-size: 1rem;
                    margin-top: 1.2rem;
                    text-decoration: underline;
                }
            }
        }
        
        .navbar-links-container{
            position: absolute;
            z-index: 2;
            top: .4rem;
            background: $primary;
            padding: 1rem;
            display: none;
            right: 200px;
            transform: translateX(200px);
            width: 200px;
            border: $border;
            a {
                color: #fff;
                display: block;
                padding: .5rem;
                border-bottom: $border;
            }
        
        }
        .show-navbar{
            display: block;
        }

        .input-search-container{

            margin-top: 1rem;
            display: flex;
            background: #fff;
            padding: .2rem;

            .search-icon{
                width: 40px;
                height: 40px;
                flex-shrink: 0;
                flex-grow: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                background: $secondary;
                font-size: 1.2rem;
                
                i{
                    display: block;
                    margin: auto;
                    color: #fff;
                    font-size: 1rem;
                }
            }
            input{
                width: 100%;
                display: block;
                background: transparent;
                border: none;
                margin-left: .5rem;
                font-weight: 400;
            }
            
        }
    }
</style>


<script>

import SearchInput from './SearchInput.vue';



export default {
    name: "NabBar",
    components:{
        SearchInput
    },
    data: function(){
        return({
            showNavbar: false
        })
    },
    methods:{
    }
}
</script>

