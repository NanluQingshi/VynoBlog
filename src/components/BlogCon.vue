<!--
 * @Author: nlqs
 * @Date: 2024-05-26 13:57:31
 * @Description: 博客组件
-->

<script setup>
import { ref } from 'vue'

// 是否收藏
const isCollect = ref(true)
// 是否点赞
const isLike = ref(false)

// TODO: 获取博客详情
const getDetail = () => {}
</script>

<template>
  <div class="blog">
    <div
      class="content"
      @click="getDetail"
    >
      <div class="title">标题</div>
      <div class="text">1998年，凤凰传奇的前身“酷火组合”成立。2003年，演唱的歌曲《月亮之上》让他们开始受到更多关注 [4]。2004年7月，获得第十一届CCTV青年歌手电视大奖赛职业组十佳优秀歌手 [3]；同年，签约孔雀唱片。2005年，组合名改为“凤凰传奇” [4]；同年，发行组合的首张专辑《月亮之上》 [109-110]；此外，还获得了中央电视台综艺频道选秀节目《星光大道》的年度亚军，而他们的演艺之路也正式开启 [4-5]。2008年，首次参加中央电视台春节联欢晚会，而他们也先后十次登上了央视春晚舞台。2009年，进入二炮文工团 [6]；同年，凭借专辑《最炫民族风》获得第11届CCTV-MTV音乐盛典“内地年度最佳组合”奖。
        2010年，举办组合出道后的首场演唱会 [123]；同年，他们演唱的歌曲《荷塘月色》获得广东省第八届精神文明建设“五个一工程”奖。2012年，发行组合的首张舞曲专辑《舞动奇迹》，其中歌曲《最炫民族风》成为首支被美国NBA篮球比赛作为暖场音乐使用的华语歌曲 [139]。2013年，登上福布斯中国名人榜，位列第71名 [150-151]；同年，凭借歌曲《自由自在》入围第14届华鼎奖全球音乐满意度调查颁奖盛典最受欢迎组合 [158]。2016年，推出专辑《远方的远方还是远方》。2019年，参加庆祝新中国成立七十周年“江山如画”国庆音乐会 [180]。2023年，在中央广播电视总台中秋晚会上演唱歌曲《过山》。</div>
      <div class="pub-time">2024-05-26 14:41:07</div>
    </div>
    <div class="iconitem">
      <ul>
        <li>
          <i
            class="iconfont icon-shoucang"
            @click="doCollect"
            :class="isCollect ? 'active' : ''"
          ></i>
          <p>1</p>
        </li>
        <li>
          <i
            class="iconfont icon-dianzan"
            @click="doCollect"
            :class="isLike ? 'active' : ''"
          ></i>
          <p>1</p>
        </li>
        <li>
          <i class="iconfont icon-icon-"></i>
          <p>1</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="less" scoped>
.active {
  color: #d81e06;
}

.blog {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 1rem;
  width: 24rem;
  height: 18.5rem;
  background-color: #fff;
  cursor: pointer;
  transition: .8s;

  &:hover {
    width: 24.5rem;
    height: 20rem;
    box-shadow: 0 0 10px 10px rgba(51, 51, 51, 0.25);
  }

  .content {
    // display: flex;
    // align-items: space-between;
    width: 100%;
    padding: 0 1.4rem;

    .title {
      width: 100%;
      margin-bottom: 1rem;
      color: #494949;
      font-weight: 800;
      font-size: 1.25rem;
      // 文本不换行
      white-space: nowrap;
      overflow: hidden;
      // 文本过长用省略号代替
      text-overflow: ellipsis;
    }

    .text {
      // 使用弹性盒子，仅用于支持基于 WebKit 的浏览器（比如 Safari 和旧版本的 Chrome）。
      display: -webkit-box;
      // 文本最多显示 5 行
      -webkit-line-clamp: 5;
      // 文本按垂直方向排列
      -webkit-box-orient: vertical;
      margin-bottom: 1.1rem;
      width: 100%;
      color: #919191;
      line-height: 1.7rem;
      // 超出部分显示省略号
      overflow: hidden;
      text-overflow: ellipsis;
      text-indent: 2em;
    }

    .pub-time {
      color: #cf4848;
      font-size: 0.9rem;
    }
  }

  .iconitem {
    width: 100%;
    height: 3.5rem;
    // background-color: #ccc;
    border-top: 1px solid rgb(226, 226, 226);
    font-size: 1rem;

    ul {
      display: flex;
      justify-content: space-around;
      align-items: center;

      li {
        padding: 0.5rem 0;
        height: 3.5rem;
        text-align: center;

        p {
          color: #666;
          font-size: 0.8rem;
        }
      }
    }
  }
}
</style>