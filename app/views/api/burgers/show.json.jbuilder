json.partial! "api/burgers/burgers", burger: @burger
if @burger.photo.attached?
    json.photo url_for(@burger.photo)
end