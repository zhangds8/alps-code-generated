<template>
  <div id="alps">
      <el-steps :active="active" align-center>
        <el-step title="步骤1" description="填写源原信息"></el-step>
        <el-step title="步骤2" description="选择实体"></el-step>
        <el-step title="步骤3" description="这是一段很长很长很长的描述性文字"></el-step>
        <el-step title="步骤4" description="这是一段很长很长很长的描述性文字"></el-step>
        <el-step title="步骤5" description="这是一段很长很长很长的描述性文字"></el-step>
        <el-step title="步骤6" description="这是一段很长很长很长的描述性文字"></el-step>
        <el-step title="步骤7" description="这是一段很长很长很长的描述性文字"></el-step>
      </el-steps>
      <el-button @click="next">下一步</el-button>
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      active: 0
    }
  },
  methods: {
    next () {
      if (this.active++ > 6) {
        this.active = 0
      }
    }
  }
}
</script>

<style lang="scss">

</style>
