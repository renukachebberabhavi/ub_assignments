class ApplicationController < ActionController::Base
    def landing
        render html: "Welcome to blog article"
    end
end
