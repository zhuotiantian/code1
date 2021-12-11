import { Component, Prop, Watch, Emit, Vue } from 'vue-property-decorator';
import './index.less';
interface Item {
  text: string;
  complete: boolean;
}
@Component({
  name: 'TodoItem',
})
export default class TodoItem extends Vue {
  // 需要使用public修饰
  @Prop(Object) public item!: Item;
  @Prop(Number) public index!: number;
  @Prop(Number) public edittingId!: number;

  public edittingContent = '';
  @Watch('edittingId')
  public edittingIdChange(index: number) {
    if (index === this.index) {
      this.edittingContent = this.item.text;
    } else {
      this.edittingContent = '';
    }
  }
  @Emit('on-save')
  public save() {
    return {
      index: this.index,
      content: this.edittingContent,
    };
  }
  public edit() {
    this.$emit('on-edit', this.index);
  }
  public cancel() {
    this.$emit('on-cancel');
  }
  public complete() {
    this.$emit('on-click', this.index);
  }
  protected render() {
    return (
      <li class='todo-item' on-click={this.complete}>
        {this.edittingId === this.index ? (
          <div>
            <a-input v-model={this.edittingContent}></a-input>
            <a-icon type='check' nativeOn-click={this.save}></a-icon>
            <a-icon type='close' nativeOn-click={this.cancel}></a-icon>
          </div>
        ) : (
          <div>
            <span style={this.item.complete ? { textDecoration: 'line-through' } : {}}>{this.item.text}</span>
            <a-icon type='edit' nativeOn-click={this.edit}></a-icon>
          </div>
        )}
      </li>
    );
  }
}
