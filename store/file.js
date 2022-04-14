// export const actions = {
//    async uploadFile({ commit }, { file, callback }) {
//       if (!file) return;

//       var formData = new FormData();
//       formData.append("formFile", file);

//       var response = await this.$axios.$post(
//          this.$axios.defaults.baseURL + "/api/file/upload",
//          formData,
//          {
//             headers: {
//                "Content-Type": "multipart/form-data",
//             },
//          }
//       );

//       callback(response.data.data);
//    },
// };
