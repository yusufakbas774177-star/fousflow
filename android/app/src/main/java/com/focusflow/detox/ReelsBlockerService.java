package com.focusflow.detox;

import android.accessibilityservice.AccessibilityService;
import android.accessibilityservice.AccessibilityServiceInfo;
import android.view.accessibility.AccessibilityEvent;
import android.view.accessibility.AccessibilityNodeInfo;
import android.util.Log;
import java.util.List;

public class ReelsBlockerService extends AccessibilityService {

    private static final String TAG = "ReelsBlockerService";

    @Override
    public void onAccessibilityEvent(AccessibilityEvent event) {
        AccessibilityNodeInfo source = event.getSource();
        if (source == null) return;

        // Reels veya Shorts kelimelerini ekranda ara
        if (findTextInNode(source, "Reels") || findTextInNode(source, "Shorts") || findTextInNode(source, "Keşfet")) {
            Log.d(TAG, "Reels/Shorts algılandı! Ana ekrana dönülüyor...");
            performGlobalAction(GLOBAL_ACTION_HOME);
        }
        
        source.recycle();
    }

    private boolean findTextInNode(AccessibilityNodeInfo node, String text) {
        if (node == null) return false;
        
        if (node.getText() != null && node.getText().toString().toLowerCase().contains(text.toLowerCase())) {
            return true;
        }
        
        for (int i = 0; i < node.getChildCount(); i++) {
            if (findTextInNode(node.getChild(i), text)) {
                return true;
            }
        }
        return false;
    }

    @Override
    public void onInterrupt() {
        Log.d(TAG, "Servis kesildi.");
    }

    @Override
    protected void onServiceConnected() {
        super.onServiceConnected();
        Log.d(TAG, "Servis bağlandı.");
    }
}
