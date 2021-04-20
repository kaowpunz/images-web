<template>
  <div id="app">
    <vue-dropzone
      ref="imgDropZone"
      id="customdropzone"
      :options="dropzoneOptions"
      @vdropzone-complete="afterComplete"
    ></vue-dropzone>
    <div v-if="images.length > 0" class="image-div">
      <div v-for="image in images" :key="image.src">
        <img :src="image.src" class="image" />
      </div>
    </div>
    <!-- <b-card class="mt-3" header="Usage Data">
      <pre class="m-0">{{ image }}</pre>
    </b-card> -->
  </div>
</template>

<script>
import Axios from 'axios'
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
let uuid = require("uuid");
export default {
  components: {
    vueDropzone: vue2Dropzone
  },
  data() {
    return {
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 150,
        thumbnailHeight: 150,
        addRemoveLinks: true,
        acceptedFiles: ".jpg, .jpeg, .png",
        dictDefaultMessage: `<p class='text-default'><i class='fa fa-cloud-upload mr-2'></i> Drag Images or Click Here</p>
          <p class="form-text">Allowed Files: .jpg, .jpeg, .png</p>
          `
      },
      images: []
    };
  },
  methods: {
    async afterComplete(upload) {
      var imageName = uuid.v1();
      this.isLoading = true;
      try {
            //save image
            const url = "http://127.0.0.1:8000/images";
            // const body = {
            //     name: upload.name,
            //     // Image: this.logo.imagedata.split(",")[1],
            //     size: upload.size,
            //     path : upload.dataURL,
            //     type : upload.type 
            // };
            let data = new FormData()
            data.append('file', upload, upload.name)
            const config = {
                headers: { "Content-type": "multipart/form-data" }
            };
           
            Axios.post(url, data, config).then(resp => {
                console.log(resp.data);
            }).catch(function (error) {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);

                    alert(error.response.data.error)
                }
            });      

        console.log('save : ' + imageName )
      } catch (error) {
        console.log(error);
      }

        this.$refs.imgDropZone.getAcceptedFiles(upload);
    }
  }
};
</script>

<style>
.image-div {
  display: flex;
  margin: 25px;
}
.image {
  max-width: 250px;
  margin: 15px;
}
</style>