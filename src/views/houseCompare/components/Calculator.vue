<template>
  <Modal v-model="Calculator" width="395" style="z-index:-1">
    <Tabs value="name1" class="tabs" type="card" size="large">
      <TabPane label="计算过程" name="name1" icon="md-calculator">
        <div>
          <Form :model="formCalculator" label-position="right" :label-width="50">
            <FormItem label-width="60" label="单价">
              <Row>
                <Col span="18">
                <Input v-model="formCalculator.input1"></Input>
                </Col>
                <Col span='5' style="text-align:right">元/平方米</Col>
              </Row>
            </FormItem>
            <FormItem label-width="60" label="面积">
              <Row>
                <Col span="18">
                <Input v-model="formCalculator.input2"></Input>
                </Col>
                <Col span='5' style="text-align:right">元/平方米</Col>
              </Row>
            </FormItem>
            <FormItem label-width="60" label="首付">
              <Row>
                <Col span="18">
                <Input v-model="formCalculator.input3"></Input>
                </Col>
                <Col span='2' style="text-align:right">成</Col>
              </Row>
            </FormItem>
            <FormItem label-width="60" label="按揭年数">
              <Row>
                <Col span="18">
                <Select v-model="modal5">
                  <Option v-for="item in years" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
                </Col>
              </Row>
            </FormItem>
            <FormItem label-width="60" label="年利率">
              <Row>
                <Col span="18">
                <Select v-model="modal6">
                  <Option v-for="item in rate" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
                </Col>
              </Row>
            </FormItem>
          </Form>
          <div slot="footer" style="text-align:right;width:320px">
            <Button type="primary" @click="Calculate">计算</Button>
          </div>
        </div>
      </TabPane>
      <TabPane label="计算结果" name="name2" icon="md-list-box">
        <div style="text-align:center">
          <Form :model="formResult" label-position="left" :label-width="70">
            <FormItem label="房款总额">
              <Row>
                <Col span="18">
                <Input v-model="formResult.input1"></Input>
                </Col>
                <Col span='3'>元</Col>
              </Row>
            </FormItem>
            <FormItem label="贷款总额">
              <Row>
                <Col span="18">
                <Input v-model="formResult.input2"></Input>
                </Col>
                <Col span='3'>元</Col>
              </Row>
            </FormItem>
            <FormItem label="月均付款">
              <Row>
                <Col span="18">
                <Input v-model="formResult.input3"></Input>
                </Col>
                <Col span='3'>元</Col>
              </Row>
            </FormItem>
            <FormItem label="还款总额">
              <Row>
                <Col span="18">
                <Input v-model="formResult.input4"></Input>
                </Col>
                <Col span='3'>元</Col>
              </Row>
            </FormItem>
            <FormItem label="支付息款">
              <Row>
                <Col span="18">
                <Input v-model="formResult.input5"></Input>
                </Col>
                <Col span='3'>元</Col>
              </Row>
            </FormItem>
          </Form>
        </div>
      </TabPane>
    </Tabs>
    <div slot="footer">

    </div>
  </Modal>
</template>
<script>
export default {
    created() {
        this.$root.Bus.$on("eventCalculator", () => {
            this.Calculator = true;
        });
    },
    data() {
        return {
            Calculator: false,
            formCalculator: {
                input1: "",
                input2: "",
                input3: ""
            },
            formResult: {
                input1: "",
                input2: "",
                input3: "",
                input4: "",
                input5: ""
            },
            years: [
                {
                    value: 5,
                    label: "5年"
                },
                {
                    value: 10,
                    label: "10年"
                },
                {
                    value: 15,
                    label: "15年"
                },
                {
                    value: 20,
                    label: "20年"
                },
                {
                    value: 25,
                    label: "25年"
                },
                {
                    value: 30,
                    label: "30年"
                }
            ],
            rate: [
                {
                    value: 0.0332,
                    label: "最新基准利率7折"
                },
                {
                    value: 0.038,
                    label: "最新基准利率8折"
                },
                {
                    value: 0.0404,
                    label: "最新基准利率8.5折"
                },
                {
                    value: 0.0428,
                    label: "最新基准利率9折"
                },
                {
                    value: 0.0475,
                    label: "最新基准利率"
                },
                {
                    value: 0.0523,
                    label: "最新基准利率1.1倍"
                },
                {
                    value: 0.057,
                    label: "最新基准利率1.2倍"
                },
                {
                    value: 0.0617,
                    label: "最新基准利率1.3倍"
                }
            ],
            modal5: "",
            modal6: ""
        };
    },
    methods: {
        Calculate() {
            let month = this.modal5 * 12;
            let monthRate = this.modal6 / 12;
            this.formResult.input1 =
                this.formCalculator.input1 * this.formCalculator.input2;
            this.formResult.input2 =
                this.formCalculator.input1 *
                this.formCalculator.input2 *
                (1 - 0.1 * this.formCalculator.input3);
            this.formResult.input3 =
                [
                    this.formResult.input2 *
                        monthRate *
                        Math.pow(1 + monthRate, month)
                ] / [Math.pow(1 + monthRate, month) - 1];
            this.formResult.input4 = this.formResult.input3 * month;
            this.formResult.input5 =
                this.formResult.input4 - this.formResult.input2;
            this.Result = true;
        }
    },
    beforeDestroy() {
        this.$root.Bus.$off("eventCalculator");
    }
};
</script>

