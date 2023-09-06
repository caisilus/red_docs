require "test_helper"

class DocEditChannelTest < ActionCable::Channel::TestCase
  test "subscribes and streams for document" do
    subscribe

    assert subscription.confirmed?
    assert_has_stream "document"
  end
end
