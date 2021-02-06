<template lang="pug">
  .wrapper
    header
      .navbar <!--Даем стиль навбара, линия снизу -->
        .container  <!--даем стиль контейнера-->
          .navbar-content <!--даем стиль навбара-->
            a.header-logo(href='index.html') Film library
            router-link.header-logo(
              to='/'
            )
            //Создаем бургер из линий, который будет появляться при скрытии правых кнопок (адаптив)
            //Даем класс active если menushow = true и наоборот
            .button-burger(
              @click="menuShow = !menuShow"
              :class="{ active: menuShow }"
            )
              span.line.line-1
              span.line.line-2
              span.line.line-3
            //Даем стиль, который убирает все кнопки, если хоть одна не влезает
            //Даем класс active если menushow = true и наоборот, изменяем вертикальное положение на горизонтальное (и наоборот)
            .navbar-list__wrapper(
              :class="{ active: menuShow }"
            )
              ul.navbar-list  <!--Даем стиль горизонтального списка-->
                // Создаем элемент списка, в link передаем объекты из linkMenu
                //Изменяем значение manuShow, изменяя наличие класса active у других элементов
                li.navbar-item(
                  v-for="link in linkMenu"
                  :key="link.title"
                  @click="menuShow = false"
                )
                  //Cоздаём блок с ссылкой, полученной из link.url и вставляем элемент link.title
                  router-link.navbar-link(
                    :to="`${link.url}`"
                  ) {{ link.title }}

    router-view
</template>

<script>
export default {
  data () {
    return {
      menuShow: false,
      linkMenu: [
        {title: 'Home', url: '/'},
        {title: 'Login', url: '/login'},
        {title: 'Registration', url: '/registration'}
      ]
    }
  }
}
</script>

<style lang='stylus'>
@import './assets/stylus/main.styl'
</style>
