<template>
  <div id="ImageCropper">
    <cropper v-if="image.src" ref="cropper" class="cropper" :src="image.src" />
    <div class="button-wrapper">
      <a href="javascript:;" class="button" @click="$refs.file.click()">
        <input
          type="file"
          ref="file"
          @change="uploadImage($event)"
          accept="image/*"
        />
        Upload image
      </a>
      <a href="javascript:;" class="button" @click="cropImage()">Crop image</a>
    </div>
  </div>
</template>

<script>
import { Cropper } from "vue-advanced-cropper";
import "vue-advanced-cropper/dist/style.css";

export default {
  name: "ImageCropper",
  data() {
    return {
      image: {
        src: null,
          // "https://images.pexels.com/photos/4218687/pexels-photo-4218687.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        type: null //"image/jpg",
      },
    };
  },
  methods: {
    cropImage() {
      const result = this.$refs.cropper.getResult();
      console.log('result:', result);
      
    //   const newTab = window.open();
    //   newTab.document.body.innerHTML = `<img src="${result.canvas.toDataURL(
    //     this.image.type
    //   )}"></img>`;
    },
    uploadImage(event) {
      /// Reference to the DOM input element
      const { files } = event.target;
      // Ensure that you have a file before attempting to read it
      if (files && files[0]) {
        // 1. Revoke the object URL, to allow the garbage collector to destroy the uploaded before file
        if (this.image.src) {
          URL.revokeObjectURL(this.image.src);
        }
        // 2. Create the blob link to the file to optimize performance:
        const blob = URL.createObjectURL(files[0]);

        // 3. Update the image. The type will be derived from the extension and it can lead to an incorrect result:
        this.image = {
          src: blob,
          type: files[0].type,
        };
      }
    },
  },
  destroyed() {
    // Revoke the object URL, to allow the garbage collector to destroy the uploaded before file
    if (this.image.src) {
    //   URL.revokeObjectURL(this.image.src);
    }
  },
  components: {
    Cropper,
  },
};
</script>

<style>
.cropper {
  min-height: 300px;
  width: 100%;
}

.button-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 17px;
}

.button {
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  width: 100%;
  background: #151515;
  cursor: pointer;
  transition: background 0.5s;
  border: none;
  &:not(:last-of-type) {
    margin-right: 10px;
  }
  &:hover {
    background: #2F2F2F;
  }
  input {
    display: none;
  }
}
</style>
