<template>
  <CheckboxGroup v-model="social" @on-change="GET">
    <Checkbox  label="twitter"></Checkbox>
  </CheckboxGroup>
</template>
<script>
export default {
  methods: {
    GET() {
      console.log(this.social);
    }
  },
  data() {
    return {
      social: []
    };
  }
};
</script>
<style scoped>
.ivu-checkbox-wrapper {
  cursor: pointer;
  font-size: 12px;
  display: inline-block;
  margin-right: 8px;
  margin-top: 60px;
}
</style>

