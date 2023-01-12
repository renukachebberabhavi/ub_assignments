class BlogController < ApplicationController
    skip_before_action :verify_authenticity_token
    
    def index
        render json: Blog.all
    end
    def show
        v = Blog.find(params[:id])
        render json: v
    end
    def create
        puts params[:title]
        puts params[:content]
        puts params[:imagelink]
        v = !params[:title].empty?
        if (v)
            p =  Blog.create('title': params[:title], 'content': params[:content], 'imagelink': params[:imagelink])
            puts p
            render json: "Data Added"
        else
            render json: "Data not added" 
        end
    end
    def update
        p =Blog.find(params[:id].to_i)
        p.update('title': params[:title], 'content': params[:content], 'imagelink': params[:imagelink])
        render json: "Data updated"
    end
    def destroy
        p =Blog.find(params[:id].to_i)
        p.destroy
        render json: "Data deleted"
    end
end
