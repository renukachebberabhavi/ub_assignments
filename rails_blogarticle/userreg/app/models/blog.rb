class Blog < ApplicationRecord
    validates :title,  presence: true, length: {minimum: 1,maximum: 80}
    validates :content,  presence: true, length: {minimum: 2,maximum: 5000}

end
