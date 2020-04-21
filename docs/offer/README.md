
```python
# 向数组$arr头部插入'a'
[].insert(0, 'a')
```

```php
# 向数组$arr头部插入'a'
array_unshift($arr, 'a');

# 指针构造
class ListNode{
    var $val;
    var $next = NULL;
    function __construct($x){
        $this->val = $x;
    }
}
```

```javascript
// 向数组$arr头部插入'a'
[].unshift('a');

// 指针构造
function ListNode(x){
    this.val = x;
    this.next = null;
}
```

```java
// 向数组$arr头部插入'a'
import java.util.ArrayList;
ArrayList<Integer> res = new ArrayList<>();
res.add(0, 'a');
```