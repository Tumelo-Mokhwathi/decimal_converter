<template>
  <div class="card mt-5">
    <div class="card-header mt-5 text-center">
      Enter your Coordinates below.
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col-4">
          <float-label>
            <div
              class="input-group input-group-lg d-flex justify-content-center"
            >
              <input
                type="text"
                class="form-control"
                name="degree"
                placeholder="Degrees"
                v-model="degree"
                v-validate="'numeric'"
              />
              <div class="input-group-append">
                <span class="input-group-text">°</span>
              </div>
            </div>
          </float-label>
          <span class="text-danger">{{ errors.first("degree") }}</span>
        </div>
        <div class="col-4">
          <float-label>
            <div
              class="input-group input-group-lg d-flex justify-content-center"
            >
              <input
                type="text"
                class="form-control"
                name="minutes"
                placeholder="Minutes"
                v-model="minute"
                v-validate="'numeric'"
              />
              <div class="input-group-append">
                <span class="input-group-text">′</span>
              </div>
            </div>
          </float-label>
          <span class="text-danger">{{ errors.first("minutes") }}</span>
        </div>
        <div class="col-4">
          <float-label>
            <div
              class="input-group input-group-lg d-flex justify-content-center"
            >
              <input
                type="text"
                class="form-control"
                name="second"
                placeholder="Second"
                v-model="second"
                v-validate="'numeric'"
              />
              <div class="input-group-append">
                <span class="input-group-text">′′</span>
              </div>
            </div>
          </float-label>
          <span class="text-danger">{{ errors.first("second") }}</span>
        </div>
      </div>
    </div>
    <div class="card-mt-5">
      <div class="card-header text-center">
        Decimal Result
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-12">
            <div
              class="input-group input-group-lg d-flex justify-content-center"
            >
              <input
                readonly
                type="text"
                id="inputId"
                class="form-control"
                v-model="calculated"
                placeholder="Decimal Degree"
              />
              <div class="input-group-append">
                <button class="btn btn-primary" @click="copyToClipBoard">
                  <i class="icon-copy"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FloatLabel from "vue-float-label/components/FloatLabel.vue";
import Vue from "vue";
import VeeValidate from "vee-validate";

Vue.use(VeeValidate);

export default {
  components: {
    FloatLabel
  },
  computed: {
    calculated() {
      const isPositive = +this.degree >= 0;
      return (
        +this.degree +
        (isPositive ? +this.minute : -this.minute) / 60.0 +
        ((isPositive ? +this.second : -this.second) / 3600.0).toFixed(6)
      );
    }
  },
  data() {
    return {
      degree: 0,
      minute: 0,
      second: 0
    };
  },
  methods: {
    copyToClipBoard() {
      const copyTextArea = document.getElementById("inputId");
      copyTextArea.select();
      document.execCommand("copy");
    }
  },
  name: "converter"
};
</script>
