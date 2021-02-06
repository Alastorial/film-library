// Прописываем компонент Home
// Прописываем язык на котром будем писать
<template lang='pug'>
  .content-wrapper
    section
      .container
        h1.ui-title-1 Home

        input(
          type='text'
          placeholder="What we will watch?"
          v-model="taskTitle" /** Передаем значение данного инпута в taskTitle */
          @keyup.enter="newTask" /** При нажатии на enter запускаем функцию newTask */
        )

        textarea(
          type='text'
          v-model="taskDescription" /** Передаем значение текстового поля в taskDescription */
          @keyup.enter="newTask" /** При нажатии на enter запускаем функцию newTask */
        )

        .option-list <!-- Блок с радиометками -->
          input#radioFilm.what-watch--radio(
            type="radio"
            value="Film"
            v-model="whatWatch" /** Передаем значение метки (value) в whatWatch */
          )
          label(
            for="radioFilm" /** Привязываем лейбл к метки с помощью for по id */
          ) Film

          input#radioSerial.what-watch--radio(
            type="radio"
            value="Serial"
            v-model="whatWatch"
          )
          label(
            for="radioSerial"
          ) Serial

        .total-time <!-- Блок с количеством времени -->
          .total-time__film(
            v-if="whatWatch === 'Film'"
          )
            span Total Film Times

          .total-time__serial(
            v-if="whatWatch === 'Serial'"
          )
            span Total Serial Times

        .tag-list
          .ui-tag__wrapper
            .ui-tag
              span.tag-title Dogs
              span.button-close

    section
      .container
        .task-list
          .task-item(
            v-for="task in tasks"
            :key="task.id"
            :class="{ completed: task.completed }" /** Х#й знает зачем это нужно, но когда true - класс completed активен */
          )
            .ui-card.ui-card--shadow

              .task-item--info <!-- Информация о карточке -->
                .task-item__main-info
                  span.ui-label.ui-label--light {{ task.whatWatch }}
                  span Total Time:
                span.button-close

              .task-item__content <!-- Контент карточки -->
                .task-item__header
                  .ui-checkbox-wrapper
                    input.ui-checkbox(
                      type='checkbox'
                      v-model="task.completed" /** Передаём значение чекбокса в task.completed */
                      )
                  span.ui-title-3 {{ task.title }}

              .task-item__body
                p.ui-text-regular {{ task.description }}
</template>

<script>
export default {
  data () {
    return {
      taskTitle: '',
      taskDescription: '',
      whatWatch: 'Film',
      taskId: 3,
      tasks: [
        {
          'id': 1,
          'title': 'GrowthBusters: Hooked on Growth',
          'description': 'I directed this documentary',
          'whatWatch': 'Film',
          'completed': false,
          'editing': false
        },
        {
          'id': 2,
          'title': 'Game of Thrones',
          'description': 'Best serials',
          'whatWatch': 'Serial',
          'completed': false,
          'editing': false
        }
      ]
    }
  },
  methods: {
    newTask () {
      if (this.taskDescription && this.taskTitle) {
        this.tasks.push({
          id: this.taskId,
          title: this.taskTitle,
          description: this.taskDescription,
          whatWatch: this.whatWatch,
          completed: false,
          editing: false
        })

        // Reset
        this.taskId += 1
        this.taskTitle = ''
        this.taskDescription = ''
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .task-item
    margin-bottom 20px
    &:last-child
      margin-bottom 0

  .ui-label
    margin-right 8px

  .task-item--info
    display flex
    align-items center  // центрируем объекты
    justify-content space-between
    margin-bottom 20px

  .button-close
    width 20px
    height @width

  .task-item__header
    display flex
    align-items center  // центрируем объекты
    margin-bottom: 18px;

  .ui-title-3
    margin-bottom 0

  .ui-checkbox-wrapper
    margin-right 8px

  .option-list
    display flex

    .what-watch--radio
      margin-right 12px

    label
      margin-right 20px
      &:last-child
        margin-bottom 0

  .ui-tag
    margin-top 20px

</style>
