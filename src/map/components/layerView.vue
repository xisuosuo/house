
 <template>
  <div class="layerManager" v-show="active">
    <tabs>
      <span class="icon layerClose" style="margin-top: 4px;" title="关闭全部图层" slot="extra"></span>
      <tab-pane name="layer" :label="label">
        <ul>
          <li>
            <span>
              <Checkbox v-model="gj" @on-change="changegj">
                <span class="layerIcon l-layer"></span>公交</Checkbox>
            </span>
          </li>
          <span>
            <Checkbox v-model="cz">
              <span class="layerIcon l-layer"></span>车站</Checkbox>
          </span>
          <li>
            <span>
              <Checkbox v-model="yl">
                <span class="layerIcon l-layer"></span>医疗设施</Checkbox>
            </span>
          </li>
          <li>
            <span>
              <Checkbox v-model="school">
                <span class="layerIcon l-layer"></span>学校</Checkbox>
            </span>
          </li>
          <li>
            <span>
              <Checkbox v-model="yl">
                <span class="layerIcon l-layer"></span>休闲娱乐</Checkbox>
            </span>
          </li>
          <li>
            <span>
              <Checkbox v-model="gy">
                <span class="layerIcon l-layer"></span>公园</Checkbox>
            </span>
          </li>
        </ul>
      </tab-pane>
    </tabs>
  </div>
</template> 
<script>
import Server from "@/core/server";
import { services } from "@/core/config/services";
import housueName from "@/vuex/store";
export default {
  data() {
    return {
      gj: false,
      cz: false,
      yl: false,
      school: false,
      yl: false,
      gy: false,
      houseName: "",
      list: []
    };
  },
  methods: {
    changegj() {
      if (this.gj == false) {
        debugger;
        onemap.pubsub.publish("clear");
        this.list = [];
        onemap.pubsub.publish("drawMarkerByList", {
          list: this.list
        });
      }

      var value = "BUSSTATION";
      this.getData(value);
    },
    getData(value) {
      debugger;
      this.houseName = housueName.state.housueName;
      Server.get({
        url: services.road,
        params: {
          name: this.houseName,
          tableName: value
        }
      }).then(rsp => {
        var _this = this;
        if (rsp.status === 1) {
          _this.list = rsp.data;
        }
      });
    }
  },
  props: {
    active: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: "图层"
    }
  }
};
</script>
      <!-- <tab-pane name="layer" :label="label">
        <section :style="{maxHeight:maxHeight+'px'}" v-if="visible" v-show="tabName==='layer'"> -->
          <!-- <tree-view ref="tree" 
            :mapView="mapView" 
            :treeData="layerList"
            :flatState="flatState"
            @on-check-change="onCheckChange"
            @on-group-check-change="onGroupCheckChange"/> -->
        <!-- </section>
      </tab-pane> -->
      <!-- <tab-pane name="favour" v-if="!isOut" label="收藏" >
        <section :style="{maxHeight:maxHeight+'px'}" v-if="visible" v-show="tabName==='favour'">
          <tree-view ref="treeFav" 
            :mapView="mapView" 
            :treeData="favLayerList" 
            :flatState="flatState"
            @on-check-change="onCheckChange"/>
        </section>
      </tab-pane>
      <tab-pane name="recent" v-if="!isOut" label="最近">
        <section  :style="{maxHeight:maxHeight+'px'}" v-if="visible" v-show="tabName==='recent'">
          <tree-view ref="treeRecent" 
            :mapView="mapView" 
            :treeData="recentLayerList"
            :flatState="flatState"
            @on-check-change="onCheckChange"/>
        </section>
      </tab-pane>
      <tab-pane name="legend" label="图例">
        <section   v-if="visible" v-show="tabName==='legend'">
          <legend-view :data="legendList" :legend="legend" :height="maxHeight"/>
        </section>
      </tab-pane> -->
    <!-- </tabs>
  </div>




