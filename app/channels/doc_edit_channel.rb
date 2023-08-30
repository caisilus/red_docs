class DocEditChannel < ApplicationCable::Channel
  def subscribed
    stream_from "document"
  end

  def receive(data)
    ActionCable.server.broadcast("document", data)
  end

  def unsubscribed
    stop_all_streams
  end
end
