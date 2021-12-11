<template>
  <div class="todo-page">
    <ul>
      <todo-item v-for="(item, index) in list" :key="index" :item="item" :index="index" :edittingId="editting" @on-save="handleSave" @on-edit="handleEdit" @on-cancel="handleCancel" @on-click="complete"></todo-item>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TodoItem from '@/components/todo-item';
import { State, Mutation } from 'vuex-class';
@Component({
  name: 'TodoPage',
  components: {
    TodoItem,
  },
})
export default class TodoPage extends Vue {
  @State('list') public list;
  public editting = -1;
  @Mutation('updateList') public updateList;
  public handleSave({ index, content }) {
    this.updateList({ index, content });
    this.handleCancel();
  }
  public handleEdit(index) {
    this.editting = index;
  }
  public handleCancel() {
    this.editting = -1;
  }
  public complete(index) {
    this.list[index].complete = true;
  }
}
</script>
