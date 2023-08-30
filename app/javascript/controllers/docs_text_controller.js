import { Controller } from "@hotwired/stimulus"
import consumer from "../channels/consumer"

// Connects to data-controller="docs-text"
export default class extends Controller {
  static targets = ["docTextArea"]

  connect() {
    this.channel = consumer.subscriptions.create({ channel: "DocEditChannel"}, {
      connected: this._cableConnected.bind(this),
      disconnected: this._cableDisconnected.bind(this),
      received: this._cableReceived.bind(this)
    })
  }

  _cableConnected() {
    console.log("cable connected")
  }

  _cableDisconnected() {
    console.log("cable disconnected")
  }

  _cableReceived(data) {
    this.docTextAreaTarget.value = data["body"]
  }

  textInputed(event) {
    this.channel.send({ type: "edit", body: event.target.value })
  }
}
