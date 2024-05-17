{
  "rules": {
    "images": {
      ".read": true,
      ".write": "auth != null",
      "$imageId": {
        ".validate": "newData.isString() && newData.val().matches(/^data:image\\/.*/)"
      }
    }
  }
}

