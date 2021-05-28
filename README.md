# React Native ActivityIndicator

# Props :

## size :

<p>Size of the indicator.</p>

```js
<ActivityIndicator size="small" color="#0000ff" />;

<ActivityIndicator size="large" color="#0000ff" />;

<ActivityIndicator size={80} color="red" />;
```

## color :

<p>The foreground color of the spinner.</p>

```js
color = "#0000ff";
```

## animating :

<p>Whether to show the indicator (true) or hide it (false).</p>

```js
const [show, setShow] = useState(true);
...
<ActivityIndicator size={80} color="tomato" animating={show} />
<Button title="Show Hide Indicator" onPress={() => setShow(!show)} />
...
```

## Usage

```
 $ git clone https://github.com/SuryaKarmakar/React-Native-ActivityIndicator.git
 $ cd React-Native-ActivityIndicator
 $ npm install
 $ npm run [web, android, ios]

```

## Run with Expo

```
 $ expo start --[web, android, ios]

```
