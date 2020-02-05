import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-rating-star",
  templateUrl: "./rating-star.component.html",
  styleUrls: ["./rating-star.component.css"]
})
export class RatingStarComponent implements OnInit {
  @Output() public cEvent = new EventEmitter();

  constructor() {}

  calculate(val) {
    //console.log(val);
    this.cEvent.emit(val);
  }

  ngOnInit() {
    (function() {
      var starEls = document.querySelectorAll("#star span.star");
      var rate = 0;

      loop(starEls, function(el, index) {
        el.addEventListener("click", function() {
          rating(index + 1);
        });
      });

      function loop(list, func) {
        Array.prototype.forEach.call(list, func);
      }

      function rating(score) {
        loop(starEls, function(el, index) {
          if (index < score) {
            el.classList.add("on");
          } else {
            el.classList.remove("on");
          }
        });

        rate = score;
      }
    })();
  }
}
