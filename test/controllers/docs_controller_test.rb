require "test_helper"

class DocsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get docs_url
    assert_response :success
  end
end
