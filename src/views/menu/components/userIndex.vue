
 <template>
    <div class="menu">
        <router-link to="/data">
            <div class="item-viewuser">
                <div class="itemuser bg0">
                    <div class="icon-wrap">
                        <i class="icon-chart"></i>
                    </div>
                    <div class="label">
                        <span>数据展示</span>
                    </div>
                </div>
            </div>
        </router-link>
        <router-link to="/infoSearch">
            <div class="item-viewuser">
                <div class="itemuser bg1">
                    <div class="icon-wrap">
                        <i class="icon-cgzs"></i>
                    </div>
                    <div class="label">
                        <span>信息查询</span>
                    </div>
                </div>
            </div>
        </router-link>
        <router-link to="/recommendation/housingPreference">
            <div class="item-viewuser">
                <div class="itemuser bg2">
                    <div class="icon-wrap">
                        <i class="icon-text"></i>
                    </div>
                    <div class="label">
                        <span>房源推荐</span>
                    </div>
                </div>
            </div>
        </router-link>
        <router-link to="/housingValuation">
            <div class="item-viewuser">
                <div class="itemuser bg3">
                    <div class="icon-wrap">
                        <i class="icon-ywgl"></i>
                    </div>
                    <div class="label">
                        <span>住房估价</span>
                    </div>
                </div>
            </div>
        </router-link>
        <router-link to="/personalcenter">
            <div class="item-viewuser">
                <div class="itemuser bg4">
                    <div class="icon-wrap">
                        <i class="icon-ywgl"></i>
                    </div>
                    <div class="label">
                        <span>个人中心</span>
                    </div>
                </div>
            </div>
        </router-link>
        <router-link to="/auDecision/usersManual">
            <div class="item-viewuser">
                <div class="itemuser bg5">
                    <div class="icon-wrap">
                        <i class="icon-fzjc"></i>
                    </div>
                    <div class="label">
                        <span>区位资源</span>
                    </div>
                </div>
            </div>
        </router-link>
    </div>
</template>
<script>
import Server from "@/core/server";
import { services } from "@/core/config/services";
export default {
  data() {
    return {
      name: "personal",
      user: ""
    };
  },
  methods: {}
};
</script>

