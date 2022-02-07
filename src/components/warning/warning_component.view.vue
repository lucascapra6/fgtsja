<template>
    <div class="text-center">
        <v-snackbar
                v-model="showSnack"
                elevation="24"
                :color="type"
                timeout="2500"
        >
            <b>{{ message || 'Favor fechar esta aba' }}</b>
            <template v-slot:action="{ attrs }">
                <v-btn
                        text
                        v-bind="attrs"
                        @click="showSnack = false"
                >
                    Fechar
                </v-btn>
            </template>
        </v-snackbar>
    </div>
</template>

<script>
	import WarningController from "./warning_component.controller";

	export default {
		name: "index",
		data: () => ({
			showSnack: false,
			type: 'info',
			message: 'Alerta!',
		}),
		props: {
			identifierComponentName: String
		},
		beforeMount() {
			this.warningController = new WarningController(this);
		}
	}
</script>

<style scoped>

</style>
