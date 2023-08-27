import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="docs-text"
export default class extends Controller {
  connect() {
    console.log("hello from docs-text-controller!")
  }

  textInputed(event) {
    console.log(event.target.value)
  }
}
