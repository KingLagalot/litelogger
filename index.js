    exports.init = function(name, timestamp){
        this.name = name;
        this.timestamp = timestamp;
        return this;
    };
    exports.make = function(output, message, flag, color){
        var flags = '';
        if(this.name != null){
          var flags = '['+this.name+']';
        }
        if(this.timestamp){
            flags = '['+new Date().toLocaleTimeString('en-US', { hour12: false })+']'+flags;
        }
        if(flag != undefined){
            flags += '['+flag+']';
        }
        output = '\x1b['+color+'m' + output + flags + '\x1b[0m';
        if(flags == ""){
            output += message;
        }else{
            output += ' ' + message;
        }
        return output;
    };

    exports.debug = function(message, flag){
        var output = '   debug - ';
        message = '\x1b[2m' + message + '\x1b[0m';
        output = this.make(output,message,flag,'34');
        console.log(output);
    };

    exports.info = function(message, flag){
        var output = '   info  - ';
        output = this.make(output,message,flag,'36');
        console.log(output);
    };

    exports.warning = function(message, flag){
        var output = ' warning - ';
        output = this.make(output,message,flag,'93');
        console.log(output);

    };

    exports.error = function(message, flag){
        var output = '   error - ';
        output = this.make(output,message,flag,'31');
        console.log(output);

    };
