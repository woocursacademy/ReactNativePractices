import { useState } from "react";
import {View, Image, Text, StyleSheet, TouchableOpacity} from "react-native";

function StatBox({label,value}){
  return (
    <View style={styles.statBox}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

export default function App(){
  const [isFollowing, setIsFollowing] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };
  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <View style={styles.headerRow}>
          <Image
          style={styles.avatar}
          source={{uri:"https://i.pravatar.cc/300?img=12",}}
          />
          <View>
            <Text style={styles.name}>
              John Ibrahim
            </Text>
            <Text style={styles.role}>
              Software Engineer
            </Text>
          </View>
        </View>
        <Text style={styles.bio}>
          Building Mobile Apps step by step. learning
          React Native Plus firebase. Consistency is the Key.
        </Text>
        <View style={styles.statsRow}>
          <StatBox label="Posts" value="25"/>
          <StatBox label="Followers" value="1.5k"/>
          <StatBox label="Following" value="120"/>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={[styles.primaryBtn,isFollowing ? styles.primaryBtnActive:null]} onPress={handleFollow}>
            <Text style={styles.primaryText}>{isFollowing ? "Following" : "Follow"}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.secondaryBtn,isLiked ? styles.secondaryBtnActive:null]} onPress={handleLike}>
            <Text style={styles.secondaryText}>{isLiked ? "Liked" : "Like"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex:1,
    // backgroundColor:"#0B1220",
    justifyContent:"center",
    padding: 18,
  },
  card: {
    backgroundColor:"#111827",
    borderRadius: 18,
    padding: 18,
    borderWidth:1,
    borderColor:"#1F2937",
  },
  headerRow:{
    flexDirection:"row",
    gap: 14,
    alignItems:"center",
  },
  name:{
    fontSize: 22,
    fontWeight: "900",
    color:"white",
  },
  role:{
    color: "#9ca3af",
    fontWeight: "700",
    marginTop:3,
  },
  bio:{
    marginTop: 14,
    color:"#E5E7EB",
    lineHeight:20,
    fontWeight:"700",
  },
  avatar:{
    width:72,
    height:72,
    borderRadius:18,
  },
  headerText:{
    flex:1,
  },
  statsRow: {
    marginTop: 16,
    flexDirection: "row",
    gap: 10,
  },
  statBox:{
    flex: 1,
    backgroundColor: "#0B1220",
    borderRadius: 15,
    paddingVertical: 12,
    alignItems: "center",
    borderWidth: 1,
    borderBlockColor: "#1F2937",
  },
  statValue: {
    color: "white",
    fontWeight: "900",
    fontSize: 16,
  },
  statLabel: {
    marginTop: 16,
    color: "#9CA3AF",
    fontWeight: "800",
    fontSize: 12,
  },
  buttonRow: {
    marginTop: 16,
    flexDirection: "row",
    gap: 10,
  },
  primaryBtn: {
    flex: 1,
    backgroundColor: "#2563EB",
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
  },
  primaryBtnActive: {
    backgroundColor: "#16A34A",
  },
  secondaryBtn: {
    flex: 1,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#374151",
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
  },
  secondaryBtnActive: {
    backgroundColor: "#16A34A",
  },
  primaryText: {
    color: "white",
    fontWeight: "900",
  },
  secondaryText: {
    // color: "E5E7EB",
    color: "white",
    fontWeight: "900",
  },
});