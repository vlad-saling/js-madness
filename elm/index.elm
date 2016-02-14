import Html exposing (span, text)
import Html.Attributes exposing (..)

main =
  span [style [("color", "green")], class "test"] [text "Hello, World!"]