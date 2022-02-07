<template>
  <v-overlay :value="isLoading">
    <v-dialog
      v-model="isLoading"
      hide-overlay
      persistent
      width="300"
      retain-focus
    >
      <v-card color="primary" dark>
        <v-card-text>
          {{ loadText || "Carregando" }}
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-overlay>
</template>

<script>
import LoaderController from "./loader_component.controller";

export default {
  name: "index",
  props: {
    identifierComponentName: String,
  },
  data: () => ({
    loadText: "",
    isLoading: false,
  }),
  beforeMount() {
    this.loaderController = new LoaderController(this);
  },
};
</script>

<style scoped></style>
