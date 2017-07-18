function calculatrice() {

click= this ;
this.field="input#number";
this.button="#body .buttons";
this.init=false;

}
this.run = function()
{
    $(this.button).click(function() {
        var value = $(this).html();

        if (that.init == false)
        {
            $(that.field).val("");
            that.init = true;
        }

        if (value != "=")
            $(that.field).val($(that.field).val() + value);

        that.dispatcher(value);
    });
},

    this.dispatcher = function(value)
    {
        if ($(this.field).val().indexOf("/") != -1)
            this.operation(value, "/");
        if ($(this.field).val().indexOf("*") != -1)
            this.operation(value, "*");
        if ($(this.field).val().indexOf("-") != -1)
            this.operation(value, "-");
        if ($(this.field).val().indexOf("+") != -1)
            this.operation(value, "+");
    },
