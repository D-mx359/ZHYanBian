from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('hello.html')

@app.route("/data")
def data():
    return render_template('data.html')

@app.route('/main')
def main():
    return render_template('main.html')

@app.route('/yanji')
def yanji():
    return render_template('延吉.html')

@app.route('/hunchun')
def hunchun():
    return render_template('珲春.html')

@app.route('/antu')
def antu():
    return render_template('安图.html')

@app.route('/dunhua')
def dunhua():
    return render_template('敦化.html')

@app.route('/wangqing')
def wangqing():
    return render_template('汪清.html')

@app.route('/helong')
def helong():
    return render_template('和龙.html')

@app.route('/tumen')
def tumen():
    return render_template('图们.html')

@app.route('/longjing')
def longjing():
    return render_template('龙井.html')

@app.route('/yanji1')
def yanji1():
    return render_template('yanji.html')

@app.route('/hunchun1')
def hunchun1():
    return render_template('hunchun.html')

@app.route('/wangqing1')
def wangqing1():
    return render_template('wangqing.html')

@app.route('/tumen1')
def tumen1():
    return render_template('tumen.html')

@app.route('/helong1')
def helong1():
    return render_template('helong.html')

@app.route('/antu1')
def antu1():
    return render_template('antu.html')

@app.route('/dunhua1')
def dunhua1():
    return render_template('dunhua.html')

@app.route('/longjing1')
def longjing1():
    return render_template('longjing.html')

@app.route('/helong_1')
def helong_1():
    return render_template('和龙-1.html')

@app.route('/antu_2')
def antu_2():
    return render_template('安图-2.html')

@app.route('/antu_1')
def antu_1():
    return render_template('安图-1.html')

@app.route('/dunhua_2')
def dunhua_2():
    return render_template('敦化-2.html')

@app.route('/dunhua_1')
def dunhua_1():
    return render_template('敦化-1.html')

@app.route('/hunchun_1')
def hunchun_1():
    return render_template('珲春-1.html')

@app.route('/longjing_1')
def longjing_1():
    return render_template('龙井-1.html')

if __name__ == '__main__':
    app.run(debug=True)