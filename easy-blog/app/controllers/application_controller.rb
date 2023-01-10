class ApplicationController < ActionController::Base
    def index
        render html: 'hello World'
    end
end
