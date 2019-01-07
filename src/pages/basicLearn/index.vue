<template>
  <el-tabs class="text-left" v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="插值" name="first">
        <h2>插值</h2>
        示例：
        <div class="demo-box">
          <h3><a href="">文本</a></h3>
          <p>{{first.msg}}</p>
          <hr/>
          <h3><a href="">特性</a></h3>
          <p v-bind:class="first.className">我的class是动态的</p>
          <hr/>
          <h3><a href="">使用 JavaScript 表达式</a></h3>
          <p>
            {{ first.number + 1 }}

            {{ first.ok ? 'YES' : 'NO' }}

            {{ first.message.split('').reverse().join('') }}
          </p>
          <div v-bind:id="'list-' + first.id">动态ID</div>
          <hr/>
        </div>
    </el-tab-pane>
    <el-tab-pane label="指令" name="second">
      <h2>指令</h2>
      示例：
      <div class="demo-box">
        <h3>参数</h3>
        <p><a v-bind:href="second.href">v-bind:href</a></p><hr/>
        <h3>修饰符</h3>
        <p><button v-on:click.prevent="secondClick">点击事件</button></p><hr/>
        <h3>缩写</h3>
        <p>v-bind缩写</p>
        <p><a :href="second.href">v-bind:href==:href</a></p>
        <hr/>
        <p>v-on缩写</p>
        <p><button @click.prevent="secondClick">v-on:click==@click</button></p>
        <hr/>
      </div>
    </el-tab-pane>
    <el-tab-pane label="计算属性和侦听器" name="third">
      <h2>计算属性</h2>
      <div class="demo-box">
        <h3>基础例子 </h3>
        <p>计算长表达式:{{reversedMessage}}</p><hr/>
        <h3>计算属性的setter </h3>
        <p>fullName:{{fullName}} firstName:{{third.firstName}} lastName:{{third.lastName}}</p>
      </div>
      <h2>侦听器</h2>

    </el-tab-pane>
    <el-tab-pane label="Class与Style绑定" name="fourth">
      <h2>Class与Style绑定</h2>
      <h3>Class</h3>
      <div class="demo-box">
          <p class="static" :class="{ active: fourth.isActive, 'text-danger': fourth.hasError }">对象语法</p>
          <p class="static" :class="fourth.classObj">内置对象</p>
          <p class="static" :class="classObject">计算属性绑定类名</p>

      </div><hr/>
      <h3>数组语法</h3>
      <div class="demo-box">
          <p :class="fourth.classArray">数组语法绑定class</p>
          <p :class="[fourth.isActive ? fourth.activeClass:'',fourth.hasError ? fourth.errorClass:'']">数组语法绑定class</p>
      </div>
      <h3>在组件上使用动态class</h3>
      <div class="demo-box">
        <el-button type="primary" :class="fourth.classArray">主要按钮</el-button>
      </div>
      <hr/>

      <h2>绑定内联样式</h2>
      <div class="demo-box">
        <p :style="{ color: fourth.activeColor, fontSize: fourth.fontSize + 'px' }">对象语法</p>
        <p :style="fourth.styleObject">内置对象</p>
      </div>
    </el-tab-pane>
    <el-tab-pane label="条件渲染" name="five">
      <h2>条件渲染</h2>
      <h3>v-if</h3>
      <div class="demo-box">
        <p v-if="five.isShow">Yes</p>
        <h1 v-else>No</h1>

       <!--key 管理可复用的元素-->
        <p v-if="five.type=='1'" key="1">1 SHOW</p>
        <p v-else-if="five.type=='2'" key="2">2 SHOW</p>
        <p v-else="five.type=='3'" key="3">3 SHOW</p>

      </div><hr/>
      <h3>v-show</h3>
      <div class="demo-box">
        <p v-show="five.type=='2'" key="1">2 SHOW</p>
      </div>
    </el-tab-pane>
    <el-tab-pane label="列表渲染" name="six">
      <h2>列表渲染</h2>
      <h3>基础渲染数组和对象</h3>
      <div class="demo-box">
        <p>数组</p>
        <ul>
          <li v-for="(item,index) of six.items" >
            {{item.message}}+{{index}}
          </li>
        </ul>
        <p>对象</p>
        <ul>
          <li v-for="(obj,key,index) of six.object" :key="index">
            {{key}}+{{obj}}+{{index}}
          </li>
        </ul>
      </div><hr/>
      <h3>数组更新检测</h3>
      <p>变异方法</p>
      <div class="demo-box">
        <p>Vue 包含一组观察数组的变异方法，所以它们也将会触发视图更新。这些方法如下：</p>
        <ul>
          <li><code>push()</code></li>
          <li><code>pop()</code></li>
          <li><code>shift()</code></li>
          <li><code>unshift()</code></li>
          <li><code>splice()</code></li>
          <li><code>sort()</code></li>
          <li><code>reverse()</code></li>
        </ul>
        <el-button type="success" @click="updateArray">触发数组跟新</el-button>
      </div>
      <p>替换数组(返回新数组)</p>
      <div class="demo-box">
        <ul>
          <li><code>filter()</code></li>
          <li><code>concat()</code></li>
          <li><code>slice()</code></li>
        </ul>
        <el-button type="success" @click="instateArray">触发数组替换</el-button>

      </div><hr/>
      <p>修改数组某一个值</p>
      <div class="demo-box">
        <ul>
          <li v-for="(item,index) of six.items" >
            {{item.message}}+{{index}}
          </li>
        </ul>
        <el-button type="success" @click="changeArrayValue">修改某个值更新</el-button>
      </div>
      <h3>对象更改检测</h3>
      <p>还是由于 JavaScript 的限制，Vue 不能检测对象属性的添加或删除</p>
      <div class="demo-box">
        <ul>
          <li v-for="(obj,key,index) of six.object" :key="index">
            {{key}}+{{obj}}+{{index}}
          </li>
        </ul>
        <el-button type="success" @click="addObjValue">新增某个对象的属性</el-button>
      </div>
    </el-tab-pane>
    <el-tab-pane label="事件处理" name="seven">
      <h2>事件处理</h2>
      <h3>简单列子</h3>
      <div class="demo-box">
        <el-button type="success" @click="clickEvent">点击事件</el-button>
        <el-button type="success" @click="clickEvent('hi',$event)">点击事件</el-button>
        <p>事件修饰符</p>
        <ul>
          <li><code>.stop 阻止事件捕获</code></li>
          <li><code>.prevent 阻止默认行为</code></li>
          <li><code>.capture 即元素自身触发的事件先在此处理，然后才交由内部元素进行处理</code></li>
          <li><code>.self 只当在 event.target 是当前元素自身时触发处理函数</code></li>
          <li><code>.once 事件只触发一次</code></li>
          <li><code>.passive 滚动条完成时触发</code></li>
        </ul>
      </div><hr/>
      <h3>按键修饰符</h3>
      <div class="demo-box">
        <input @keyup.enter="eventSubmit">

        <p>别名</p>
        <ul>
          <li><code>.enter</code></li>
          <li><code>.tab</code></li>
          <li><code>.delete</code> (捕获“删除”和“退格”键)</li>
          <li><code>.esc</code></li>
          <li><code>.space</code></li>
          <li><code>.up</code></li>
          <li><code>.down</code></li>
          <li><code>.left</code></li>
          <li><code>.right</code></li>
        </ul>

        <p>可以通过全局 config.keyCodes 对象自定义按键修饰符别名：</p>
        <input @keyup.f1.prevent="eventSubmit">

        <p>.exact 修饰符允许你控制由精确的系统修饰符组合触发的事件。ctrl+click</p>
        <el-button type="success" @click.ctrl.exact="clickEvent('hi',$event)">点击事件</el-button>

        <p>鼠标按钮修饰符</p>
        <ul>
          <li><code>.left</code></li>
          <li><code>.right</code></li>
          <li><code>.middle</code></li>
        </ul>
        <p>右键触发</p>
        <el-button type="success" @click.prevent.middle="clickEvent('hi',$event)">点击事件</el-button>
      </div>

    </el-tab-pane>
    <el-tab-pane label="表单输入" name="eight">
      <h2>表单输入</h2>
      <h3>基础用法</h3>
      <div class="demo-box">
        <p>文本</p>
        <input v-model="eight.text" />
        <p>多行文本</p>
        <textarea v-model="eight.texts"></textarea>
        <p>复选框</p>
        <input type="checkbox" id="jack" value="Jack" v-model="eight.checkedNames">
        <label for="jack">Jack</label>
        <input type="checkbox" id="john" value="John" v-model="eight.checkedNames">
        <label for="john">John</label>
        <input type="checkbox" id="mike" value="Mike" v-model="eight.checkedNames">
        <label for="mike">Mike</label>
        <br>
        <span>Checked names: {{ eight.checkedNames }}</span>
        <p>单选框</p>
        <div id="example-4">
          <input type="radio" id="one" value="One" v-model="eight.picked">
          <label for="one">One</label>
          <br>
          <input type="radio" id="two" value="Two" v-model="eight.picked">
          <label for="two">Two</label>
          <br>
          <span>Picked: {{ eight.picked }}</span>
          <p>下拉框</p>
          <div id="example-5">
            <select v-model="eight.selected">
              <option disabled value="">请选择</option>
              <option value="a">A</option>
              <option value="b">B</option>
              <option value="c">C</option>
            </select>
            <span>Selected: {{ eight.selected }}</span>
            <p>复选框动态绑值</p>
            <input type="checkbox" v-model="eight.toggle" true-value="yes" false-value="no">
            {{eight.toggle}}
            <br>
            <p>下拉框动态绑值</p>
            <select v-model="eight.selectedb">
              <!-- 内联对象字面量 -->
              <option v-bind:value="{ number: 123 }">123</option>
            </select>
            {{eight.selectedb}}
            <br/>
            <p>修饰符</p>
            <ul>
              <li>.lazy change 事件进行同步</li>
              <li>.number 会直接输入number类型</li>
              <li>.trim 去掉首尾空格</li>
            </ul>
          </div>
        </div>
      </div><hr/>
    </el-tab-pane>
    <el-tab-pane label="组件" name="nine">
      <h2>组件</h2>
      <h3>组件props 来自父</h3>
      <div class="demo-box">
          单独传字符串值
          <!--<base-button v-for="(item,index) in nine.posts" :key="item.id" :title="item.title"></base-button>-->
      </div>
      <div class="demo-box">
        传对象
        <base-button v-for="(item,index) in nine.posts" :key="item.id" :title="item" ></base-button>
      </div>
      <h3>通过事件向父级组件发送消息</h3>
      <div class="demo-box">
        <base-button v-for="(item,index) in nine.posts" :key="item.id" :title="item" @enlarge-text="formSubCompont"></base-button>
      </div>
      <h3>在组件上使用v-modal</h3>
      <div class="demo-box">
        <base-input v-model="nine.searchText"></base-input>
        {{nine.searchText}}
        <br/>
      </div>
      <h3>props 传递对象 不带key,传递所有对象属性</h3>
      <div class="demo-box">
          <base-button :title="nine.objData.title"></base-button>
      </div>

      <div class="demo-box">
        <p>这个 prop 用来传递一个初始值；这个子组件接下来希望将其作为一个本地的 prop 数据来使用。在这种情况下，最好定义一个本地的 data 属性并将这个 prop 用作其初始值</p>
        <sub-component :data="nine.objData"></sub-component>
      </div>
      <h3>props验证</h3>
      <div class="demo-box">
        <p>
          {
          type: String,
          required: true
          }

        </p>
        <ul>
          <li><code>String</code></li>
          <li><code>Number</code></li>
          <li><code>Boolean</code></li>
          <li><code>Array</code></li>
          <li><code>Object</code></li>
          <li><code>Date</code></li>
          <li><code>Function</code></li>
          <li><code>Symbol</code></li>
        </ul>
      </div>

    </el-tab-pane>

  </el-tabs>
</template>

<script>
import Vue from 'vue'
import ElTabPane from "element-ui/packages/tabs/src/tab-pane";
import SubComponent from "@/components/subComponent";

//自定义事件修饰符
Vue.config.keyCodes.f1 = 112
export default {
  components: {
    SubComponent,
    ElTabPane},
  data() {
    return {
      activeName: 'first',
      first:{
        msg:'这是示例文本',
        className:'class1',
        number:1,
        ok:true,
        message:'这是 示例字符串',
        id:'Demo'
      },
      second:{
        href:location.href
      },
      third:{
        message:'这是示例字符串',
        firstName:'王',
        lastName:'永奇',
      },
      fourth:{
        isActive:true,
        hasError:false,
        classObj:{
          active: true, 'text-danger': false
        },
        activeClass: 'active',
        errorClass: 'text-danger',
        classArray:['active','text-danger'],
        activeColor: 'red',
        fontSize: 30,
        styleObject: {
          color: 'red',
          fontSize: '13px'
        }
      },
      five:{
        isShow:true,
        type:'2'
      },
      six:{
        items:[
          { message: 'Foo' },
          { message: 'Bar' }
        ],
        object: {
          firstName: 'John',
          lastName: 'Doe',
          age: 30
        }
      },
      eight:{
        text:'xxx',
        texts:'lalalalala',
        checkedNames:['Jack'],
        picked:'Two',
        selected:'a',
        toggle:null,
        selectedb:null
      },
      nine:{
        posts: [
          { id: 1, title: 'My journey with Vue' },
          { id: 2, title: 'Blogging with Vue' },
          { id: 3, title: 'Why Vue is so fun' }
        ],
        postFontSize:1,
        searchText:'1',
        objData:{
          id:1,
          title:{
            title:'按钮名称'
          }
        }
      }
    };
  },
  computed:{
    // 计算属性的 getter
    reversedMessage () {
      // `this` 指向 vm 实例
      return this.third.message.split('').reverse().join('')
    },
    fullName:{
      get(){
        return this.third.firstName+this.third.lastName
      },
      set(newValue){
        var names = newValue.split('')
        this.third.firstName=names[0]
        this.lastName=names.slice(1,names.length).join('');
      }
    },
    classObject: function () {
      return {
        active: this.fourth.isActive && !this.fourth.hasError,
        'text-danger': this.fourth.hasError
      }
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    secondClick(e){
      console.log(e)
    },
    updateArray(){
      this.six.items.push({message:'Too'})
    },
    instateArray(){
      this.six.items=this.six.items.concat([{message:'新数组的类'}])
    },
    changeArrayValue(){
      Vue.set(this.six.items,0,{message:'修改后的值'})
    },
    addObjValue(){
      // Vue.set(this.six.object,'phone','13551391607');
      this.six.object = Object.assign({}, this.six.object, {
        phone: '13551391607',
        favoriteColor: 'Vue Green'
      })
    },
    clickEvent(msg,$event){
      let msgs = msg ? msg : '点击了';
      alert($event)
      alert(msgs);
    },
    eventSubmit(){
      alert('事件触发')
    },
    formSubCompont(msg){
      alert(msg)
    }
  }
};
</script>

<style scoped>
  .demo-box{
    border: 1px solid greenyellow;
    background: #fff;
    width: 80%;
    margin: 0 auto;
    padding: 15px;
  }
  .text-left{
    text-align: left;
  }
</style>
