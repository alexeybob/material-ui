### Scenarios
```javascript
export const scenarios = [
  {
    name: 'appear',
    animate: {
      y: [50, 0],
      opacity: [0, 1],
      transition: {
        opacity: { duration: 0.7 },
        y: { duration: 0.7, delay: 1, ease: 'easeInOut' }
      }
    }
  },
  {
    name: 'disappear',
    animate: {
      y: [50, 0],
      opacity: [0, 1],
      transition: {
        opacity: { duration: 0.7 },
        y: { duration: 0.7, delay: 1, ease: 'easeInOut' }
      }
    }
  }
];
```

### Animation
```javascript
  const [controls, animateControls] = useAnimateScenarios(
    scenarios
  );

  useEffect(() => {
    animateControls([1, () => {
      console.log('I am on the second step after 1s delay');
    }, 'appear'], () => {
      console.log('On finish animation of scenarios');
    });
    
    return () => {
      animateControls(['disappear']);
    }
  }, []);
```

### JSX
```jsx
    <motion.div
      initial={{
        opacity: 0,
        y: 50
      }}
      animate={controls}
    >
      {jsx}
    </motion.div>
```