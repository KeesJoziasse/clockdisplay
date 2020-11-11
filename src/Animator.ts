/**
 * The Animator class handles the animation. It holds a `Ticker` object that
 * calls the `animate()` method at regilar intervals.
 * 
 * @author BugSlayer
 */
class Animator {

    private clock: ClockDisplay;

    private ticker: Ticker;

    private Cat: cat;
    


    /**
     * Construct Animator.
     * 
     * @param clock 
     */
    public constructor(clock: ClockDisplay, Cat:cat) {
        this.clock = clock;
        this.ticker = new Ticker(this);
        this.Cat = Cat;
    
    }



    /**
     * Handles an interval. This method is called by the `Ticker` at regular
     * intervals when the ticker is running.
     */
    public step() {
        this.clock.timeTick();
        this.Cat.timeTick();
    }

    /**
     * Toggles the automatic intervals of the ticker.
     */
    public toggleAnimation() {
        this.ticker.toggle();
    }

}